import React, { useContext, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { BsCardText } from "react-icons/bs";
import TabAccount from "./TabAccount";
import SearchAccount from "./SearchAccount";
import { Container, Row, Col } from "react-grid-system";
import Revenue from "./Revenue";
import ListProducts from "./ListProducts";
import AddProduct from "./AddProduct";
import ProductDetail from "./ProductDetail";
import ProductEdit from "./ProductEdit";
// import TestProduct from "./TestProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import LoginAdmin from "./LoginAdmin";
import { productContext } from "./ProductContext/ProductContext";

export default function TabVertical() {
  const { getProducts, products, getProductitems, getSoldAndRemain } =
    useContext(productContext);
  useEffect(() => {
    getProducts();
    getProductitems();
  }, []);
  console.log(products);
  const history = useHistory();
  const handleTab = (id) => {
    if (id === 0) history.push("/products");
    else if (id === 1) history.push("/addproduct");
    else if (id === 2) history.push("/account");
    else if (id === 3) history.push("/sales");
  };
  return (
    <div className="TabMain">
      {/* luc day dieu huong o day */}

      <Tabs>
        <TabList>
          <div>
            <h1 className="Head-tab">Điều hướng</h1>
          </div>
          <Tab onClick={() => handleTab(0)}>
            <p>
              <BsCardText size={20} className="tabIcon" />
              Danh sách sản phẩm
            </p>
          </Tab>
          <Tab onClick={() => handleTab(1)}>
            <p>
              <BiAddToQueue size={20} className="tabIcon" />
              Thêm sản phẩm
            </p>
          </Tab>
          <Tab onClick={() => handleTab(2)}>
            <p>
              <IoMdPeople size={20} className="tabIcon" />
              Quản lí tài khoản
            </p>
          </Tab>
          <Tab onClick={() => handleTab(3)}>
            <p>
              <MdOutlineAttachMoney size={20} className="tabIcon" />
              Quản lí doanh thu
            </p>
          </Tab>
        </TabList>

        {/* 
        <Switch>

          <Router exact path="/products/:id">
            <TabPanel>
              <div className="panel-content">
                <ProductDetail />
              </div>
            </TabPanel>
          </Router>
          <Route path="/addproduct">
            <TabPanel>
              <div className="panel-content">
                <AddProduct />
              </div>
            </TabPanel>
          </Route>
          <Route path="/account">
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
          </Route>

          <Route path="sales">
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 4</h2>
              </div>
            </TabPanel>
          </Route>
          <Route path="/" component={LoginAdmin} />
          <Router path="/products">
            <TabPanel>
              <div className="panel-content">
                <Route path="/admin" component={LoginAdmin}></Route>
                  <Route path="/product/edit/:id">
                  <ProductEdit />
                  </Route>
                  <Route path="/" component={ListProducts}/>
                <Route path="/:id" component={ProductDetail}/>
                <ListProducts />
              </div>
            </TabPanel>
          </Router>
        </Switch> */}

        <TabPanel>
          <div className="panel-content">
            <Switch>
              <Route path="/admin" component={LoginAdmin}></Route>
              <Route path="/products/edit/:id">
                <ProductEdit />
              </Route>
              <Route path="/products/:id">
                <ProductDetail />
              </Route>
              <Route path="/">
                <ListProducts />
              </Route>
            </Switch>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <AddProduct />
          </div>
        </TabPanel>
        {/* <Route path="/products">
          <TabPanel>
            <div className="panel-content">
              <ListProducts />
            </div>
          </TabPanel>
        </Route>
        <Route path="/addproduct">
          <TabPanel>
            <div className="panel-content">
              <AddProduct />
            </div>
          </TabPanel>
        </Route>
        <Route path="/account">
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
        </Route>
        <Route path="/sales">
        <TabPanel>
          <div className="panel-content">
            <Container className="grid">
              <Row>
                <Col lg={9}>
                  {" "}
                  <h2>Quản lí doanh thu</h2>
                </Col>
                <Col lg={3}>
                  {" "}
                  <SearchAccount />
                </Col>
              </Row>
            </Container>
            <Revenue />
          </div>
        </TabPanel>
        </Route> */}

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
            <Container className="grid">
              <Row>
                <Col lg={9}>
                  {" "}
                  <h2>Quản lí doanh thu</h2>
                </Col>
                <Col lg={3}>
                  {" "}
                  <SearchAccount />
                </Col>
              </Row>
            </Container>
            <Revenue />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
