import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "right"
  },
  tab: {
    paddingLeft: "10px"
  }
}));

export default function MenuItemSet (props) {
  const {
    MenuItemOptionSetItems,
    IsMasterOptionSet
  } = props.itemSetConfig;
  const rootPrice = props.itemRootPrice;
  const classes = useStyles();

  // *** Metioned in the brief ***
  // If IsMasterOptionSet is false, then the item price is independant and overrides the price from the main section
  function getPrice(itemPrice) {
    const price = IsMasterOptionSet ? itemPrice : itemPrice + rootPrice;
    const totalPrice = '€' + price.toFixed(2);
    return totalPrice;
  }

  return (
    <div>
      {MenuItemOptionSetItems.map((MenuItemOptionSetItem) => (
        <div
          key={MenuItemOptionSetItem.MenuItemOptionSetItemId}
        >
          <Typography
            className={classes.text}
            gutterBottom
            variant="body2"
          >
            {MenuItemOptionSetItem.Name}<span className={classes.tab}></span>{getPrice(MenuItemOptionSetItem.Price)}
          </Typography>
        </div>
      ))}
    </div>
  )
}