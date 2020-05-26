import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { setUserCartData } from '../../redux/actions/app';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    addTocartMain: {

    },
}));

export default function AddTocart(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
//   const [anchorEl, setAnchorEl] = React.useState(null);

  const addToCart = (event) => {
    debugger
    dispatch(setUserCartData(props.productData))
      
  }

  return (
      <React.Fragment>
        <span
            className={classes.addTocartMain}
            onClick={()=>addToCart()}
        >
            {props.children}
        </span>
      </React.Fragment>
  );
}
