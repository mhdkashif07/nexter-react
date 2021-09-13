import React from "react";
import { Grid } from "@material-ui/core";
import { AiOutlineGlobal } from 'react-icons/ai';
import { GiTrophyCup } from 'react-icons/gi';
import { VscLocation } from 'react-icons/vsc';
import { VscKey } from 'react-icons/vsc';
import { BsGraphUp } from 'react-icons/bs';
import { RiSecurePaymentLine } from 'react-icons/ri';

const FEATURES = [
  {
    id: 1,
    icon: <AiOutlineGlobal size={50}/>,
    name: "World's best luxury homes",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
  },

  {
    id: 2,
    icon: <GiTrophyCup size={50}/>,
    name: "World's best luxury homes",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
  },

  {
    id: 3,
    icon: <VscLocation size={50}/>,
    name: "World's best luxury homes",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
  },

  {
    id: 4,
    icon: <VscKey size={50}/>,
    name: "World's best luxury homes",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
  },

  {
    id: 5,
    icon: <BsGraphUp size={50}/>,
    name: "World's best luxury homes",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
  },

  {
    id: 6,
    icon: <RiSecurePaymentLine size={50}/>,
    name: "World's best luxury homes",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
  },
];


const Features = () => {
  return (
    <div className="features__section">
      <div className="features__items">
        <Grid container spacing={6} justifyContent='space-evenly'>

          {FEATURES.map((item) => (
            <Grid item xs={10} sm={5} md={4} lg={4} xl={4}>
            <div className="feature" key={item.id}>
              <div className="feature__logo" >
                {item.icon}
              </div>
              <div className="feature__text">
                <h4 className="heading-4 heading-4--dark">
                  {item.name}
                </h4>
                <p className="feature__text-details">
                  {item.details}
                </p>
              </div>
            </div>
          </Grid>
          ))}
          
        </Grid>
      </div>
    </div>
  );
};

export default Features;
