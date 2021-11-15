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
import ProductProvider from "./components/ProductContext/ProductContext";

function App() {
  return (
    <Router>
      <ProductProvider>
        {/* <TodoList />
            <h3>Danh sach can lam</h3>
            <Textfield name='add-todo' placeholder="Them viec can lam... " elemAfterInput={
                <Button>Them</Button>
            }></Textfield> */}
        {localStorage.getItem("modal-login") !== "none" && <LoginAdmin />}
        <TabVertical />
        {/* <TabAccount /> */}
      </ProductProvider>
    </Router>
  );
}

export default App;
