import Sidebar from "./Components/topbar/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productsList/ProductList";
import ProductPage from "./pages/productPage/ProductPage";
import NewProduct from "./pages/newProduct/NewProduct";
import User from "./pages/userPage/User";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

// Layout component to conditionally render Topbar & Sidebar
function Layout() {
  const location = useLocation(); // Get current route
  const hideLayout = location.pathname === "/login"; // Hide layout for login page

  return (
    <>
      {!hideLayout && <Topbar />}
      <div className="container">
        {!hideLayout && <Sidebar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </>
  );
}

// App component with Router
function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/*" element={<Layout />} />{" "}
        {/* Handles all other routes */}
      </Routes>
    </Router>
  );
}

export default App;
