import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItemSet from './MenuItemSet';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import headerImage from '../assets/headerImage.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text:{
    textAlign: "left"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    boxShadow: 'none'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));

export default function MenuItem(props) {
  const {
    Name,
    Description,
    MenuItemOptionSets,
    ActualPrice
  } = props.itemConfig;
  // In the absence of an actual image from the server, I have put in a default.
  const ImageUrl = props.itemConfig.ImageUrl || headerImage
  const classes = useStyles();

  const renderTotalPrice = (ActualPrice) => {
    return (
      <Typography
        className={classes.text}
        gutterBottom
        variant="body2"
      >
        €{ActualPrice.toFixed(2)}
      </Typography>
    )
  }

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid
        container
        spacing={2}
      >
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt={Name}
              src={ImageUrl+'?w=200'}
            />
          </ButtonBase>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
        >
          <Grid
            item
            xs
            container
            direction="column"
            spacing={2}
          >
            <Grid
              item
              xs
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.text}
              >
                {Name}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.text}
              >
                {Description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
          {
            MenuItemOptionSets.length > 0 ?
            MenuItemOptionSets.map((menuOptionset) => (
              <MenuItemSet
                key={menuOptionset.MenuItemOptionSetId}
                itemSetConfig={menuOptionset}
                itemRootPrice={ActualPrice}
              >
              </MenuItemSet>
            ))
            :
            renderTotalPrice(ActualPrice)
          }
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>
  );
}