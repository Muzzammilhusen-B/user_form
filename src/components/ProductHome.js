import logo from "./logo.png";
import React, { Component } from "react";
import { Card, Layout, Image, Menu } from "antd";
import "antd/dist/antd.css";

const product = [
  {
    id: 1,
    name: "Book",
    image:
      "https://api.time.com/wp-content/uploads/2015/06/521811839-copy.jpg?quality=85&w=507&h=338&crop=1",
    company: "Thomson Reuters",
    price: "250 Rs.",
  },
  {
    id: 2,
    name: "Pen",
    image:
      "https://www.amrita.edu/sites/default/files/styles/news_banner_imagesbreakpoints_theme_norma_tablet_1x/public/fountain-pen-blog.jpg?itok=f-nqerRx&timestamp=1548828364",
    company: "MONTBLANC",
    price: "150 Rs.",
  },
  {
    id: 3,
    name: "laptop",
    image:
      "https://cdn.vox-cdn.com/thumbor/zz23VuQsj-qpsdhGIDfsxdSZ5kY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg",
    company: "Dell inspiron",
    price: "26,000 Rs.",
  },
];
const { Meta } = Card;
const { Header, Content } = Layout;
class ProductHome extends Component {
  // constructor(props) {
  //   super(props);
  // }
  redirectLoginHome = () => {
    const { history } = this.props;
    if (history) history.push("/loginhome");
  };
  redirectLogout = () => {
    const { history } = this.props;
    if (history) history.push("/");
  };

  render() {
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
                Back
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

        <hr />
        <Layout className="content">
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {product.map((item) => {
              return (
                <ul>
                  <li key={item.id}>
                    <Card
                      hoverable
                      alt={item.name}
                      style={{
                        marginTop: "120px",
                        width: "300px",
                        alignContent: "inherit",
                      }}
                      cover={<img alt="example" src={item.image} />}
                    >
                      <Meta
                        title={item.company}
                        description={`Price :${item.price}`}
                      />
                    </Card>
                  </li>{" "}
                </ul>
              );
            })}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default ProductHome;
