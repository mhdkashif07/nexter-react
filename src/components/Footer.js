import React from "react";
import { Grid } from "@material-ui/core";

const ITEMS = [
  {
    id: 1,
    name: "Find your dream home",
  },

  {
    id: 2,
    name: "Find your dream home",
  },

  {
    id: 3,
    name: "Find your dream home",
  },

  {
    id: 4,
    name: "Find your dream home",
  },

  {
    id: 5,
    name: "Find your dream home",
  },

  {
    id: 6,
    name: "Find your dream home",
  },
];

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="nav">
        <Grid container justifyContent="space-evenly">
          {ITEMS.map((item, index) => (
            <Grid item xs={5} sm={3} md={2} lg={2} xl={2}>
              <div className="nav__item" key={item.id}>
                <a href="#" className="nav__link">
                  {item.name}
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="copyright">
        <p>
          © Copyright 2017 by Jonas Schmedtmann. Feel free to use this project
          for your own purposes. This does NOT apply if you plan to produce your
          own course or tutorials based on this project.
        </p>
      </div>
    </div>
  );
};

export default Footer;
