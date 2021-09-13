import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import gal_1 from '../assets/images/gal-1.jpeg';
import gal_2 from '../assets/images/gal-2.jpeg';
import gal_3 from '../assets/images/gal-3.jpeg';
import gal_4 from '../assets/images/gal-4.jpeg';
import gal_5 from '../assets/images/gal-5.jpeg';
import gal_6 from '../assets/images/gal-6.jpeg';
import gal_7 from '../assets/images/gal-7.jpeg';
import gal_8 from '../assets/images/gal-8.jpeg';
import gal_9 from '../assets/images/gal-9.jpeg';
import gal_10 from '../assets/images/gal-10.jpeg';
import gal_11 from '../assets/images/gal-11.jpeg';
import gal_12 from '../assets/images/gal-12.jpeg';
import gal_13 from '../assets/images/gal-13.jpeg';
import gal_14 from '../assets/images/gal-14.jpeg';

const itemData = [
    {
      img: gal_1,
      title: 'Breakfast',
      rows: 2,
      cols: 3,
    },
    {
      img: gal_2,
      title: 'Burger',
      rows: 3,
      cols: 5,
    },
    {
      img: gal_3,
      title: 'Camera',
      rows: 2,
      cols: 1,
    },
    {
      img: gal_4,
      title: 'Coffee',
      rows: 2,
      cols: 3,
    },
    {
      img: gal_5,
      title: 'Hats',
      rows: 3,
      cols: 3,
    },
    {
      img: gal_8,
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: gal_9,
      title: 'Fern',
      rows: 3,
      cols: 2,
    },

    {
      img: gal_6,
      title: 'Mushrooms',
      rows: 2,
      cols: 3,
    },
    {
      img: gal_7,
      title: 'Tomato basil',
      rows: 1,
      cols: 2,
    },
    
    {
      img: gal_13,
      title: 'Bike',
      cols: 4,
      rows: 3
    },
  
    {
      img: gal_10,
      title: 'Bike',
      cols: 2,
      rows: 2,
    },

    {
        img: gal_11,
        title: 'Bike',
        cols: 3,
        rows: 2
      },

      {
        img: gal_12,
        title: 'Bike',
        cols: 1,
        rows: 2
      },

      {
        img: gal_14,
        title: 'Bike',
        cols: 2,
        rows: 2
      },




  ];


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = () => {
  return (
    <div className="gallery__section">
        <ImageList
      gap = {10} 
      variant="quilted"
      
      rowHeight={75}
      cols={12}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

export default Gallery