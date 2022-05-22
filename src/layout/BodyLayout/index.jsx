import React from "react";
import { Layout, Menu } from "antd";
import useStyles from "./useStyles";
import { headerLinks } from "../../constants/links";
import { NavLink } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const BodyLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={headerLinks.map((item) => ({
              label: <NavLink to={item.link}>{item.label}</NavLink>,
              key: item.link,
            }))}
          />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
            marginTop: 64,
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            {children}
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
            background: "lightgray",
          }}
        >
          footer
        </Footer> */}
      </Layout>
    </>
  );
};

export default BodyLayout;
