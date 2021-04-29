
import Header from "./header";
import React, { useEffect, useState } from "react";
import Head from "../head";
// import Products from "../shop";

function Layout(props) {
  // useEffect(() => {
  //   document.body.classList.add("js");
  // }, []);
  return (
    <>
      <Head />
      <Header />
      {/* <Products /> */}


      <main>{props.children}</main>
    </>
  );
}

export default Layout;