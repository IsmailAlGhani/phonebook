import {
  Button,
  Layout,
  Menu,
  Row,
  Spin,
  Input,
  Col,
  Typography,
  Avatar,
} from "antd";
import { FC, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";
import { ContactContext, ContactContextType } from "../context/contactContext";

const { Content, Footer, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const RootPage: FC = () => {
  const { data, isLoading, loadMore, onSearch, onLoadMore } = useContext(
    ContactContext
  ) as ContactContextType;
  const navigate = useNavigate();

  const onTapLogo = () => {
    navigate("/");
  };

  return (
    <Spin spinning={isLoading}>
      <Layout style={{ height: "100vh" }}>
        <Sider
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            height: "100%",
            overflow: "auto",
          }}
        >
          <Row justify={"center"}>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={onTapLogo}
            >
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<AntDesignOutlined />}
                style={{ marginTop: 16 }}
              />
              <Title level={4}>Contact List</Title>
            </Col>
          </Row>
          <Row style={{ marginTop: 8, marginBottom: 8 }}>
            <Search
              placeholder="input search contact name"
              allowClear
              onSearch={onSearch}
              style={{ width: "65%" }}
            />
            <Link to={"new"}>
              <Button type="primary">Add</Button>
            </Link>
          </Row>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={data.map((item) => ({
              key: String(item.id),
              icon: <UserOutlined />,
              label: (
                <Link to={`contact/${item.id}`}>
                  {item.first_name + " " + item.last_name}
                </Link>
              ),
            }))}
          />
          {loadMore ? (
            <Row justify={"center"}>
              <Button type="dashed" onClick={onLoadMore}>
                Load More...
              </Button>
            </Row>
          ) : null}
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
          <Footer>
            <Title level={5} style={{ textAlign: "center" }}>
              Phone Book ©2023 Created by IsmailAG
            </Title>
          </Footer>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default RootPage;
