import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '400px'
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();

  return (
      <div style={{margin: '20px 0% 0% 37%'}}>

    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-email-input"
        label="Enter Something"
        className={classes.textField}
        type="text"
        name="text"
        autoComplete="text"
        margin="normal"
        variant="outlined"
        onChange={props.onchange}
        value={props.value}
        />
    </form>
        </div>
  );
}