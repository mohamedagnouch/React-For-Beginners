
import React from 'react';
//import './Validation/App.css'
//import Header from './Td/Header';
//import Produit from './TP/Produit';
//import Contact from './component/Contact';
//import Chang from "./state/Changname";
//import Conter from './Conter/Conter';
//import Jeux from './jeux/Cop';
//import Test from './jeux/test';
//import JeuDe from "./jeux/JeuDe"
//import Contact from './component/Contact';
// import Test from './component/Test';
// import Footer from './Td/Footer';
// import ProductList from './Td/ProductList';
// import Copy from './Td/copy';
//import Formu from './Form/form';
//import Login from './Validation/Login';
import { Navbar } from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import {Routes, Route} from 'react-router-dom'
import OrderSummery from './Components/Order-Summery';
import NoMatch from './Components/NoMatch';
import DataUser from './Components/DataUser';
import AddUser from './Components/AddUser';

  function App(){
//     const [products, setProduct] = useState([
//       {
//         id: 1,
//         name: "Pc Hp",
//         price: "300",
//         desc: "Core i6",
//         img: "",
//       },
//       {
//         id: 2,
//         name: "Pc Dell",
//         price: "800",
//         desc: "Core i9",
//         img: "",
//       },
//       {
//         id: 3,
//         name: "Pc Mac",
//         price: "500",
//         desc: "Core i5",
//         img: "",
//       },
//       {
//         id: 4,
//         name: "Pc Lenovo",
//         price: "700",
//         desc: "Core i7",
//         img: "",
//       },
//       {
//         id: 5,
//         name: "Pc Lenovo",
//         price: "700",
//         desc: "Core i7",
//         img: "",
//       },
//       {
//         id: 6,
//         name: "Phone",
//         price: "700",
//         desc: "Samsung S21",
//         img: "",
//       },
//       {
//         id: 7,
//         name: "Phone",
//         price: "700",
//         desc: "Iphone X",
//         img: "",
//       },
//       {
//         id: 8,
//         name: "Phone",
//         price: "700",
//         desc: "Samsung 10 +",
//         img: "",
//       },
//     ]);
    return (
      <div className="App">
        {/* <Header />
            <Footer />
            <ProductList products={products} />
            <br/>
            <Copy /> */}
        {/* <Produit /> */}
        {/* <Test cach={2} /> */}
        {/* <Contact /> */}
        {/* <Formu /> */}
        {/* <Login /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="OrderSummery" element={<OrderSummery />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
          <Route path="DataUser" element={<DataUser />}></Route>
          <Route path="AddUser" element={<AddUser />}></Route>
        </Routes>
      </div>
    ); 
}
  




export default App;

