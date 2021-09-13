import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Features from "../components/Features";
import Homes from "../components/Homes";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Story from '../components/Story';

import { Grid } from "@material-ui/core";



const Home = () => {
  return (
    <div className="home__section">

<div className="sidebar">
<Sidebar />
</div>

<div className="all__components">
<Header />
            <Features />
            <Story />
           <Homes />
           <Gallery />
           <Footer />
</div>

      {/* <Grid container>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={classes.sidebar}>
          <Sidebar />
        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <Grid xs item container>
            <Header />
            <Features />
            <Story />
           <Homes />
           <Gallery />
           <Footer />
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Home;
