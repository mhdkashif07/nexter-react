import React from "react";
import { Grid } from "@material-ui/core";
import  makeStyles  from '@emotion/styled';
import logo from "../assets/images/logo.png";
import Button from "../components/Button";
import logo_bbc from '../assets/images/logo-bbc.png';
import logo_forbes from '../assets/images/logo-forbes.png';
import logo_tech from '../assets/images/logo-techcrunch.png';
import logo_bi from '../assets/images/logo-bi.png';
import Realtors from "./Realtors";


const useStyles = makeStyles((theme) => ({
  height: {
    height: "100%",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className="header__section">
      <Grid container className={classes.height}>
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          lg={9}
          xl={9}
          className="height-80"
          direction="column"
        >
          <div className="header">
            <div className="header__logo-container">
              <img src={logo} alt="logo" className="header__logo" />
            </div>
            <div className="header__heading-main">
              <h3 className="heading-3">Your own home:</h3>
              <h1 className="heading-1">The ultimate personal freedom</h1>
              <div className="btn__container">
                <Button text="view our properties" />
              </div>
              <div className="header__heading-primary">
              <div className="header__seenon-text">Seen on</div>
              <div className="header__seenon-logos">
                <img src={logo_bbc} alt="logo-1" />
                <img src={logo_forbes} alt="logo-2" />
                <img src={logo_tech} alt="logo-3" />
                <img src={logo_bi} alt="logo-4" />
              </div>
            </div>
            </div>

            
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          className={classes.height}
          justifyContent="center"
        >
          <div className="realtor__section">
            <div>
              <h3 className="heading-3">Top 3 Realtors</h3>
            </div>
            <Realtors />
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
