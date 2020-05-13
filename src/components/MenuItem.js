import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const { Name, ImageUrl, Description, MenuItemOptionSets} = props.itemConfig;
  console.log('set items: ', MenuItemOptionSets && MenuItemOptionSets > 0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt={Name} src={ImageUrl+'?w=200'} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {Name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {Description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>
  );
}