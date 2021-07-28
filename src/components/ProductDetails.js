import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Image, Descriptions } from "antd";
import logo from "./logo.png";

const { Header, Content, Footer } = Layout;

class ProductDetails extends React.Component {
  state = {
    product: [],
  };
  componentDidMount() {
    const productData = JSON.parse(localStorage.getItem("product_obj"));
    // console.log(productData);
    this.setState({ product: productData });
  }
  redirectLoginHome = () => {
    const { history } = this.props;
    if (history) history.push("/loginhome");
  };
  redirectLogout = () => {
    const { history } = this.props;
    if (history) history.push("/");
  };

  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <div>
        <Layout className="layout">
          <Header
            className="header"
            style={{ position: "fixed", zIndex: 1, width: "100%" }}
          >
            <div className="logo">
              <Image src={logo} width={"250px"} />
            </div>
            <Menu theme="light" mode="horizontal">
              <Menu.Item key="1" onClick={this.redirectLoginHome}>
                Home
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={this.redirectLogout}
                style={{ float: "right" }}
              >
                Log out
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <Layout className="content">
          <Content
            className="site-layout-background"
            style={{ marginTop: `200px`, justifyContent: "center" }}
          >
            <div
              className="site-layout-background"
              style={{ textAlign: "center" }}
            >
              <Descriptions
                title={`${product.company} ${product.name}`}
                layout="vertical"
              >
                <Descriptions.Item>
                  <div
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "30%",
                    }}
                  >
                    <Image
                      alt={product.name}
                      // width={"500px"}
                      // height={"500px"}
                      src={product.image}
                    />
                    {product.description}
                  </div>
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Content>
        </Layout>
        <Layout>
          <Footer style={{ textAlign: "center" }}>
            User Form Design ©2021.
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default ProductDetails;
