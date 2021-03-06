import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import MenuItem from './MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    minWidth: '260px',
    maxWidth: '700px',
    marginTop: '25px',
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.06), 0px 10px 10px 0px rgba(0, 0, 0, 0.08)'
  },
  media: {
    height: 0,
    paddingTop: '25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  divider: {
    height: '1px',
    backgroundColor: '#f7f7f7'
  }
}));

export default function MenuSection(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {
    ImageUrl,
    Name,
    MenuItems
  } = props.pageConfig
  return (
    <Card
      className={classes.root}
    >
    <CardMedia
      onClick={handleExpandClick}
      className={classes.media}
      image={ImageUrl+'?w=500'}
      title={Name}
    />
    <CardActions
      disableSpacing
      onClick={handleExpandClick}
    >
      {Name}
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <div className={classes.divider}></div>
        {MenuItems.map((item) => (
          <MenuItem
            key={item.MenuItemId}
            itemConfig={item}
          >
            {item.Name}
          </MenuItem>
        ))}
      </CardContent>
    </Collapse>
  </Card>
  );
}