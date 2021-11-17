// import TodoList from "./components/TodoList";
// import Textfield from "@atlaskit/textfield";
// import Button from "@atlaskit/button";

import TabVertical from "./components/TabVertical";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import LoginAdmin from "./components/LoginAdmin";
import ProductProvider, {
  productContext,
} from "./components/ProductContext/ProductContext";
import { useContext, useEffect } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function App() {
  const { getProducts, getProductitems, loading, Loaded } =
    useContext(productContext);
  useEffect(() => {
    getProducts();
    getProductitems();
    let loadTimeout = setTimeout(() => {
      Loaded();
    }, 4000);
    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);
  return (
    <Router>
      {/* <ProductProvider> */}
      {/* <TodoList />
            <h3>Danh sach can lam</h3>
            <Textfield name='add-todo' placeholder="Them viec can lam... " elemAfterInput={
                <Button>Them</Button>
            }></Textfield> */}
      {localStorage.getItem("modal-login") !== "none" && <LoginAdmin />}
      <ClipLoader loading={loading} css={override} size={150} />
      {loading ? "" : <TabVertical />}
      {/* <TabAccount /> */}
      {/* </ProductProvider> */}
    </Router>
  );
}

export default App;
