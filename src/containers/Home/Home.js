import React from "react";
import Footer from "../../components/Footer";
import Books from "../../components/Books";
import Header from "../../components/Header";

class Home extends React.Component {

  render() {
    return (

      <React.Fragment>
        <Header />
        <Books key="books" />
        <Footer />
      </React.Fragment>
    )
  }
}


export default Home;
