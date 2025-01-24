import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./components/BannerSection/Banner";
import Grid from "./components/GridSection/Grid";

function App() {
  return (
    <>
      <Banner />
      <Grid />
    </>
  );
}

export default App;
