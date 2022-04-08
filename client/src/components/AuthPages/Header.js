import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '30px 42px',
    gap: '30px',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: '40px',
    },
  },
  headerText: {
    color: '#B0B0B0',
    fontSize: '14px',
  },
  headerLink: {
    textDecoration: 'none',
  },
  headerButton: {
    backgroundColor: 'white',
    color: '#3A8DFF',
    textDecoration: 'none',
    width: '170px',
    height: '54px',
    fontSize: '14px',
    borderRadius: '5px',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
  },
}));

const Header = ({ headerText, href, to, variant, size, buttonText }) => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.header}>
      <Typography className={classes.headerText}>{headerText}</Typography>
      <Link href={href} to={to} className={classes.headerLink}>
        <Button className={classes.headerButton} variant={variant} size={size}>
          {buttonText}
        </Button>
      </Link>
    </Grid>
  );
};

export default Header;
