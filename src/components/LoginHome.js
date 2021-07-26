import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Image } from "antd";
import logo from "./logo.png";

// import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

class LoginHome extends React.Component {
  redirectLoginHome = () => {
    const { history } = this.props;
    if (history) history.push("/");
  };
  redirectToProductHome = () => {
    const { history } = this.props;
    if (history) history.push("/producthome");
  };
  render() {
    return (
      <div>
        <Layout>
          <Layout className="layout">
            <Header className="header">
              <div className="logo">
                <Image src={logo} width={"250px"} />
              </div>
              <Menu theme="light" mode="horizontal">
                <Menu.Item key="1" onClick={this.redirectToProductHome}>
                  Home
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={this.redirectLoginHome}
                  type="primary"
                  style={{ float: "right" }}
                >
                  Log out
                </Menu.Item>
              </Menu>
            </Header>
          </Layout>
          <Layout className="content" style={{ padding: "0 24px 24px" }}>
            <div>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {/* <h1>Here comes Content</h1>
                <h2>Here comes Content</h2>
                <h3>Here comes Content</h3>
                <h4>Here comes Content</h4> */}
                {/* <h5>Here comes Content</h5>
                <h6>Here comes Content</h6> */}
              </Content>
            </div>
          </Layout>
          <Layout>
            <Footer style={{ textAlign: "center" }}>
              User Form Design ©2021.
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default LoginHome;
