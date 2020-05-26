import React from 'react';
import { useParams } from 'react-router-dom';
import ImagesGallery from '../atoms/imagesGallery';
import { makeStyles } from '@material-ui/core/styles';
import ProductInnerDetail from '../atoms/productInnerDetail';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  productDetailMain: {
    width: '100%',
    display: 'flex',
  },
  imagesGallery: {
    width: '100%',
    maxWidth: 360,
    padding: 15

  },
  roductDetailInner: {
    padding: 15,
    maxWidth: 550,
  },
}));

export default function ProductDetail(props) {
  const classes = useStyles();
  let { id } = useParams();

  console.log(id)



  return (
    <Container maxWidth="lg">
      <div className={classes.productDetailMain}>
        <div className={classes.imagesGallery}>
          <ImagesGallery productID={id} />
        </div>
        <div className={classes.roductDetailInner}>
          <ProductInnerDetail productID={id} />
        </div>
      </div>

    </Container>
  )

}

