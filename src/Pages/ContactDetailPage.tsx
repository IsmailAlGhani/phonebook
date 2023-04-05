import { useQuery } from "@apollo/client";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Popconfirm,
  Row,
  Space,
  Spin,
  Typography,
} from "antd";
import { FC, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LOAD_DETAIL_CONTACT } from "../Graphql/Queries";
import { UserOutlined } from "@ant-design/icons";
import idx from "idx";
import { Link } from "react-router-dom";
import { ContactContext, ContactContextType } from "../context/contactContext";

const { Title, Text } = Typography;

const ContactDetailPage: FC = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const {
    deleteContact,
    openConfirm,
    confirmLoading,
    showPopConfirm,
    closePopConfirm,
  } = useContext(ContactContext) as ContactContextType;

  const { loading, data } = useQuery(LOAD_DETAIL_CONTACT, {
    variables: {
      id: parseInt(contactId || "0"),
    },
  });

  const firstName = idx(data, (_) => _.contactDetail.first_name);
  const lastName = idx(data, (_) => _.contactDetail.last_name);
  const phoneList = idx(data, (_) => _.contactDetail.phones) || [];

  return (
    <Spin spinning={loading}>
      <Row style={{ margin: 16, width: "100%" }}>
        <Col span={3}>
          <Avatar
            shape="square"
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<UserOutlined />}
            style={{ marginTop: 6 }}
          />
        </Col>
        <Col span={9} style={{ width: "100%" }}>
          <Title level={4}>{firstName + " " + lastName}</Title>
          <Divider orientation="left">Phone List</Divider>
          <Space direction="vertical" size={"middle"}>
            {phoneList.map((item) => (
              <Text key={item.id} strong>
                {"+62" + item.number}
              </Text>
            ))}
            <Space wrap>
              <Link to={`edit`}>
                <Button type="default">Edit</Button>
              </Link>
              <Popconfirm
                title="Title"
                description="Open Popconfirm with async logic"
                okText="Delete"
                cancelButtonProps={{ danger: true, type: "default" }}
                open={openConfirm}
                onConfirm={() =>
                  deleteContact(contactId || "0", () => navigate("/"))
                }
                okButtonProps={{
                  loading: confirmLoading,
                  danger: true,
                  type: "primary",
                }}
                onCancel={closePopConfirm}
              >
                <Button type="primary" danger onClick={showPopConfirm}>
                  Delete
                </Button>
              </Popconfirm>
            </Space>
          </Space>
        </Col>
      </Row>
    </Spin>
  );
};

export default ContactDetailPage;
