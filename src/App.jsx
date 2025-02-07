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
import MovieList from "./pages/moviesList/MovieList";
import MoviePage from "./pages/moviePage/MoviePage";
import NewMovie from "./pages/newMovie/NewMovie";
import User from "./pages/userPage/User";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Lists from "./pages/lists/Lists";
import ListPage from "./pages/listPage/ListPage";
import NewList from "./pages/listNew/NewList";

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
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/newMovie" element={<NewMovie />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/list/:listId" element={<ListPage />} />
          <Route path="/newList" element={<NewList />} />
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
