import { FC, Fragment, lazy, ReactNode } from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import { Row, Col, Result, Typography, theme } from "antd";
import ContactProvider from "./context/contactContext";

const RootPage = lazy(() => import("./Pages/RootPage"));
const PhonebookFormPage = lazy(() => import("./Pages/PhonebookFormPage"));
const ContactDetailPage = lazy(() => import("./Pages/ContactDetailPage"));

const { Text, Title } = Typography;

const Index = () => {
  return (
    <Row justify={"center"}>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Title level={2}>Welcome to Contact List App</Title>
        <Text type="secondary">
          You can click the name to check detail contact
        </Text>
      </Col>
    </Row>
  );
};

type PhonebookLayoutType = {
  children?: ReactNode;
};

const ErrorPage: FC = () => {
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
    />
  );
};

const PhonebookLayout: FC<PhonebookLayoutType> = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Row justify={"center"}>
      <Col
        xs={22}
        sm={20}
        xl={18}
        style={{
          marginTop: "2rem",
          minHeight: "80vh",
          backgroundColor: colorBgContainer,
          borderRadius: 8,
        }}
      >
        {props.children}
        <Outlet />
      </Col>
    </Row>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "new",
            element: (
              <PhonebookLayout>
                <PhonebookFormPage />,
              </PhonebookLayout>
            ),
          },
          {
            path: "contact/:contactId/",
            element: (
              <PhonebookLayout>
                <ContactDetailPage />
              </PhonebookLayout>
            ),
          },
          {
            path: "contact/:contactId/edit",
            element: (
              <PhonebookLayout>
                <PhonebookFormPage edited={true} />
              </PhonebookLayout>
            ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ContactProvider>
      <RouterProvider router={router} fallbackElement={<Fragment></Fragment>} />
    </ContactProvider>
  );
}

export default App;
