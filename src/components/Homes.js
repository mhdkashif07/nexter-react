import React from "react";
import { Grid } from "@material-ui/core";
import house_1 from "../assets/images/house-1.jpeg";
import Button from '../components/Button';

const HOMES = [
  {
    id:1,
    img: house_1,
    name: "Large Rustical Villa",
    location_icon: "logo",
    location: "logo Portugal",
    room_icon: "logo",
    room: "6",
    area_icon: "logo",
    area: "480",
    price_icon: "logo",
    price: "1,950,000"
  },

  {
    id:2,
    img: house_1,
    name: "Large Rustical Villa",
    location_icon: "logo",
    location: "logo Portugal",
    room_icon: "logo",
    room: "6",
    area_icon: "logo",
    area: "480",
    price_icon: "logo",
    price: "1,950,000"
  },


  {
    id:3,
    img: house_1,
    name: "Large Rustical Villa",
    location_icon: "logo",
    location: "logo Portugal",
    room_icon: "logo",
    room: "6",
    area_icon: "logo",
    area: "480",
    price_icon: "logo",
    price: "1,950,000"
  },

  {
    id:4,
    img: house_1,
    name: "Large Rustical Villa",
    location_icon: "logo",
    location: "logo Portugal",
    room_icon: "logo",
    room: "6",
    area_icon: "logo",
    area: "480",
    price_icon: "logo",
    price: "1,950,000"
  },

  {
    id:5,
    img: house_1,
    name: "Large Rustical Villa",
    location_icon: "logo",
    location: "logo Portugal",
    room_icon: "logo",
    room: "6",
    area_icon: "logo",
    area: "480",
    price_icon: "logo",
    price: "1,950,000"
  },

  {
    id:6,
    img: house_1,
    name: "Large Rustical Villa",
    location_icon: "logo",
    location: "logo Portugal",
    room_icon: "logo",
    room: "6",
    area_icon: "logo",
    area: "480",
    price_icon: "logo",
    price: "1,950,000"
  }
];

const Homes = () => {
  return (
    <div className="homes__section">
      <div className="home__cards">
        <Grid container spacing={6} justifyContent='space-evenly'>

          {HOMES.map((home)=>(
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <div className="card" key={home.id}>
              <div className="card__img">
                <img src={home.img} alt={home.name} />
              </div>
                <h5 className="card__name">{home.name}</h5>
              <div className="card__details">
                <div className="first-col flex pb-small">
                  <div className="card__location">{home.location_icon} {home.location}</div>
                  <div className="card__rooms">{home.room_icon} {home.room} rooms</div>
                </div>

                <div className="second-col flex">
                  <div className="card__area">{home.area_icon}<p>{home.area} m<sup>2</sup></p></div>
                  <div className="card__price">{home.price_icon}<p>${home.price}</p></div>
                </div>
              </div>
              <div className="card__contact">
                <Button text="contact realtor" />
              </div>
            </div>
          </Grid>
          ))}
          

        </Grid>
      </div>
    </div>
  );
};

export default Homes;
