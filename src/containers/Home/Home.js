import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import Hello from "../../components/Hello";
import Books from "../../components/Books";
import Search from "../../components/Search";

const urlParams = new URLSearchParams(window.top.location.search);
const token = urlParams.get("token");
console.log(token);

const Main = () => (
  <BrowserRouter>
    <Hello />
    <Search />
    <Books key="hey" />
    <Footer />
  </BrowserRouter>
);

export default Main;
