import React from 'react';
import { useParams } from 'react-router-dom';
import ImagesGallery from '../atoms/imagesGallery';
import { makeStyles } from '@material-ui/core/styles';
import ProductInnerDetail from '../atoms/productInnerDetail';


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
      padding: 15
    },
  }));

export default function ProductDetail(props) {
    const classes = useStyles();
    let { id } = useParams();

    console.log(id)



    return (
      <div className={classes.productDetailMain}>
        <div className={classes.imagesGallery}>
          <ImagesGallery produstID={id} />
        </div>
        <div className={classes.roductDetailInner}>
          <ProductInnerDetail produstID={id} />
        </div>
      </div>
    )
  
}

