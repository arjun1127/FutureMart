import {BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import  Home  from "./pages/Home";
import UserDetails from "./pages/userDetails";
import UserForm from "./pages/UserForm";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/userDetails" element={<UserDetails/>}/>
        <Route path="/auth" element={<UserForm/>}/>
      </Routes>
    </Router>
  )
}

export default App
