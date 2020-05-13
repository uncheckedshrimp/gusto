import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import headerImage from '../assets/headerImage.jpg';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '20%'
  },
  card: {
      position: 'relative',
      width: '80%',
      minWidth: '345px',
      marginTop: '25px'
  },
  overlay: {
      color: '#333333',
      lineHeight: '80px',
      height: '80px',
      marginTop: '-80px',
      backgroundColor: 'rgba(247, 247, 247, 0.6)'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={headerImage}
      />
        <div className={classes.overlay}>
          GUSTO | MENU
        </div>
    </Card>
  )
}