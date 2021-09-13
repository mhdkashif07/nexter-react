import React from 'react';
import { Grid } from '@material-ui/core'
import realtor_1 from '../assets/images/realtor-1.jpeg';

const REALTORS = [
    {
      id: 1,
      img: realtor_1,
      name: "Erik Feinman",
      sold: "245"
    },
    {
      id: 2,
      img: realtor_1,
      name: "Erik Feinman",
      sold: "245"
    },
    {
      id: 3,
      img: realtor_1,
      name: "Erik Feinman",
      sold: "245"
    }
  ];

const Realtors = () => {
    return (
        <div className="realtors__list">
              <Grid xs item container>
                  
                  {REALTORS.map((item) => (
                      <Grid item xs={12} sm={4} md={12} lg={12} xl={12}>
                      <div className="realtor" key={item.id}>
                        <img
                          src={item.img}
                          alt="realtor-1"
                          className="realtor__img"
                        />
                        <div className="realtor__details">
                          <h4 className="heading-4 heading-4--light">{item.name}</h4>
                          <p className="realtor__sold">{item.sold} houses sold</p>
                        </div>
                      </div>
                    </Grid>
                  ))}
               
              </Grid>
            </div>
    )
}

export default Realtors
