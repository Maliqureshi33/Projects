import React from 'react';
import ItemsData from '../atoms/items';
import Filters from '../atoms/filters';

  export default function ProductListing(props) {
  const [categoryState, setCategoryState] = React.useState();

 

  const handleMenuItemClick = (category) => {
    setCategoryState(category)
  };

    
    return (
      
      <div className={`appMain fullView2 `}>
        <div className="leftSide">
          <Filters   handleMenuItemClick={handleMenuItemClick}  />
        </div>
        <div className="rightSide">
          <div className="innerSection">
            <div className>
              <ItemsData categoryState={categoryState} />
            </div>
          </div>
        </div>
      </div>
    )
}

