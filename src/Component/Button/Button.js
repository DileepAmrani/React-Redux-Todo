import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: "#00897B",
    borderColor: "#00897B",
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div style={{display: 'inline'}}>
      <Button variant="outlined" color="primary" className={classes.button} onClick={props.onclick}>
       {props.name}
      </Button>
    </div>
  );
}
