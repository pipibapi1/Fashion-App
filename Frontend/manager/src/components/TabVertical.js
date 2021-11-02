import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { BsCardText } from "react-icons/bs";
import TabAccount from "./TabAccount";
import SearchAccount from "./SearchAccount";
import { Container, Row, Col } from "react-grid-system";
import ListProducts from "./ListProducts";
import AddProduct from "./AddProduct";
import ProductDetail from "./ProductDetail";
import ProductEdit from "./ProductEdit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginAdmin from "./LoginAdmin";

export default function TabVertical() {
  return (
    <div className="TabMain">
      {/* luc day dieu huong o day */}

      <Tabs>
        <TabList>
          <div>
            <h1 className="Head-tab">Điều hướng</h1>
          </div>
          <Tab>
            <p>
              <BsCardText size={20} className="tabIcon" />
              Danh sách sản phẩm
            </p>
          </Tab>
          <Tab>
            <p>
              <BiAddToQueue size={20} className="tabIcon" />
              Thêm sản phẩm
            </p>
          </Tab>
          <Tab>
            <p>
              <IoMdPeople size={20} className="tabIcon" />
              Quản lí tài khoản
            </p>
          </Tab>
          <Tab>
            <p>
              <MdOutlineAttachMoney size={20} className="tabIcon" />
              Quản lí doanh thu
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <Router>
              {/* <Link to="/product/id">:D</Link> */}
              <Switch>
              <Router path="/admin">
                  <LoginAdmin />
                </Router>
                <Router path="/product/id/edit">
                  <ProductEdit />
                </Router>
                <Router path="/product/id">
                  <ProductDetail />
                </Router>
                <Router path="/">
                  <ListProducts />
                </Router>
              </Switch>
            </Router>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <AddProduct />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Container className="grid">
              <Row>
                <Col lg={9}>
                  {" "}
                  <h2>Quản lí tài khoản</h2>
                </Col>
                <Col lg={3}>
                  {" "}
                  <SearchAccount />
                </Col>
              </Row>
            </Container>
            <TabAccount />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 4</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
