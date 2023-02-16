import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import MarketPlace from "../pages/MarketPlace";
import MyNFT from "../pages/MyNft";
import Home from "../pages";

const AppRoute = () => {

  return render(
      <BrowserRouter>
        <ChakraProvider theme={theme} resetCSS>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/market-place" element={<MarketPlace />} />
            <Route path="/my-nfts" element={<MyNFT />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>,
    document.getElementById("root")
  );
};

export default AppRoute;
