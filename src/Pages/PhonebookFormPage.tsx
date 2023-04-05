import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  Button,
  Col,
  Form,
  Input,
  notification,
  Row,
  Space,
  Spin,
  Typography,
} from "antd";
import idx from "idx";
import { FC, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext, ContactContextType } from "../context/contactContext";
import { Contact_Set_Input, Phone_Insert_Input } from "../generated/graphql";
import { LOAD_CONTACT_LIST, LOAD_DETAIL_CONTACT } from "../Graphql/Queries";

const { Title } = Typography;
type PhonebookFormPageType = {
  edited?: boolean;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  pattern: {
    mismatch: "'${name}' does not match pattern!",
  },
};

type ContactFormType = {
  contact: ContactDataFormType;
};

type ContactDataFormType = {
  firstName: string;
  lastName: string;
  phones: string[];
};

const PhonebookFormPage: FC<PhonebookFormPageType> = ({ edited }) => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const { createContact, updateContact } = useContext(
    ContactContext
  ) as ContactContextType;

  const { loading, data } = useQuery(LOAD_DETAIL_CONTACT, {
    variables: {
      id: parseInt(contactId || "0"),
    },
    skip: !edited,
  });

  const [validateAccount] = useLazyQuery(LOAD_CONTACT_LIST);

  const dataContact = idx(data, (_) => _.contactDetail);
  const { first_name, last_name, phones = [] } = dataContact || {};

  const currentPhonesData = phones.map((item) => item.number);

  const onFinish = async (values: ContactFormType) => {
    const { firstName, lastName, phones } = values.contact;

    if (edited) {
      await validateAccount({
        variables: {
          where: {
            first_name: {
              _like: `%${first_name === firstName ? first_name : firstName}%`,
            },
            last_name: {
              _like: `%${last_name === lastName ? last_name : lastName}%`,
            },
          },
        },
      }).then(async (dataComplete) => {
        const dataCompleteFinal =
          idx(dataComplete, (_) => _.data.contact) || [];
        const dataPhone: Array<Phone_Insert_Input> = phones.map((item) => ({
          contact_id: parseInt(contactId || "0"),
          number: item,
        }));
        const id = contactId;
        const setData: Contact_Set_Input = {
          first_name: firstName,
          last_name: lastName,
        };
        if (dataCompleteFinal.length) {
          await updateContact(parseInt(id || "0"), setData, dataPhone, () =>
            navigate(-1)
          );
        } else {
          notification.error({
            message: "Name not Unique!",
            description: "Your fullname not unique!",
          });
        }
      });
    } else {
      validateAccount({
        variables: {
          where: {
            first_name: { _like: `%${firstName}%` },
            last_name: { _like: `%${lastName}%` },
          },
        },
        onCompleted: async (dataComplete) => {
          const dataCompleteFinal = idx(dataComplete, (_) => _.contact) || [];
          const dataPhone = phones.map((item) => ({ number: item }));
          if (dataCompleteFinal.length) {
            await createContact(firstName, lastName, dataPhone, () =>
              navigate("/")
            );
          } else {
            notification.error({
              message: "Name not Unique!",
              description: "Your fullname not unique!",
            });
          }
        },
      });
    }
  };

  return (
    <Spin spinning={loading}>
      <Row justify={"center"} style={{ margin: 16, width: "100%" }}>
        <Col style={{ minWidth: "60vw" }}>
          <Space wrap direction="vertical" size={"middle"}>
            <Title level={4}>{`${edited ? "Update" : "Create"} Contact`}</Title>
            <Form
              {...formItemLayoutWithOutLabel}
              onFinish={onFinish}
              style={{ minWidth: "50vw" }}
              validateMessages={validateMessages}
            >
              <Form.Item
                {...formItemLayout}
                name={["contact", "firstName"]}
                label="First Name"
                initialValue={edited ? first_name : undefined}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[A-Za-z]+$/),
                  },
                ]}
              >
                <Input style={{ width: "60%" }} />
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                name={["contact", "lastName"]}
                label="Last Name"
                initialValue={edited ? last_name : undefined}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[a-zA-Z ]*$/),
                  },
                ]}
              >
                <Input style={{ width: "60%" }} />
              </Form.Item>

              <Form.List
                name={["contact", "phones"]}
                initialValue={edited ? currentPhonesData : undefined}
                rules={[
                  {
                    validator: async (_, number) => {
                      if (!number || number.length < 1) {
                        return Promise.reject(new Error("At least 1 number"));
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...(index === 0
                          ? formItemLayout
                          : formItemLayoutWithOutLabel)}
                        label={index === 0 ? "Phone Number" : ""}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              pattern: new RegExp(/^8[1-9][0-9]{6,9}$/),
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="phone number"
                            addonBefore="+62"
                            style={{ width: "60%" }}
                          />
                        </Form.Item>
                        {fields.length > currentPhonesData.length ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: "60%" }}
                        icon={<PlusOutlined />}
                      >
                        Add field
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>

              <Form.Item>
                <Space wrap direction="horizontal" size={"middle"}>
                  <Button type="default" danger onClick={() => navigate(-1)}>
                    cancel
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </Spin>
  );
};

export default PhonebookFormPage;
