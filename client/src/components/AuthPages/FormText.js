import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formText: {
    width: '75%',
    maxWidth: '500px',
    top: '250px',
    fontSize: '26px',
    fontWeight: '600',
    fontFamily: 'Open Sans',
    marginRight: '200px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: 'unset',
      marginRight: '0',
    },
  },
}));

const FormText = ({ text }) => {
  const classes = useStyles();
  return <Typography className={classes.formText}>{text}</Typography>;
};

export default FormText;
