import React from "react";
import { Grid } from "@material-ui/core";
import story_1 from "../assets/images/story-1.jpeg";
import story_2 from "../assets/images/story-2.jpeg";
import Button from '../components/Button';

import  makeStyles  from '@emotion/styled';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));


const Story = () => {
  const classes = useStyles();
  return (
    <div className="story__section">
      <div className="story">
      <Grid container className={classes.root}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className="story__picture">
            <div className="story__front">
            <img src={story_1} alt="story-1" className="story__front-1" /> 
            <img src={story_2} alt="story-2" className="story__front-2" /> 
            </div>
          </div>
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className="story__content">
            <h3 className="heading-3 mb-sm">Happy customers</h3>
            <h2 className="heading-2 heading-2--dark mb-md">
              &ldquo;The best decision of our lives&ldquo;
            </h2>
            <p className="story__content-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus. Quidem
              consequatur harum volupta!
            </p>
            <Button text="find your own home" />
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default Story;
