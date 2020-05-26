import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import ProductCard from '../atoms/productCard';




const useStyles = makeStyles((theme) => ({
    addTocartMain: {

    },
}));

export default function Cart(props) {
  const classes = useStyles();
  const cartBookingData = useSelector(state => state.app.cartBookingData)

  return (
      <div className>
        {
          cartBookingData.length > 0 && 
            cartBookingData.map(item => (
              <ProductCard item={item} viewType="list" />
            ))
        }
      </div>
  );
}
