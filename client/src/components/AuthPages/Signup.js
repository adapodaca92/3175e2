import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SidebarImage from './SidebarImage';
import Header from './Header';
import FormText from './FormText';
import {
  Grid,
  Box,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      overflowX: 'hidden',
      overflowY: 'scroll',
    },
  },
  mainBox: {
    width: '100%',
  },
  mainGrid: {
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '30px 42px',
    gap: '30px',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: '30px',
    },
  },
  alreadyHaveAccount: {
    color: '#B0B0B0',
    fontSize: '14px',
  },
  mainFormGrid: {
    width: '100%',
  },
  formBox: {
    height: '424px',
    marginTop: '170px',

    [theme.breakpoints.down('sm')]: {
      height: '400px',
      marginTop: '0',
    },
  },
  formContainer: {
    height: '100%',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '86px',
    marginLeft: '85px',

    [theme.breakpoints.down('sm')]: {
      margin: '40px 0',
      height: '100%',
      width: '100%',
    },
  },
  formGrid: {
    width: '75%',
    maxWidth: '600px',
  },
  formControl: {
    width: '100%',
    margin: '35px 0px',

    [theme.breakpoints.down('sm')]: {
      margin: '20px 0',
    },
  },
  loginLink: {
    textDecoration: 'none',
  },
  loginButton: {
    backgroundColor: 'white',
    color: '#3A8DFF',
    textDecoration: 'none',
    height: '54px',
    width: '140px',
    borderRadius: '5px',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
  },
  createButton: {
    backgroundColor: '#3A8DFF',
    color: 'white',
    height: '56px',
    width: '160px',
    fontSize: '16px',
    borderRadius: '3px',
    marginTop: '20px',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
    },
  },
}));

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <div className={classes.root}>
      <SidebarImage />
      <Grid container className={classes.mainGrid}>
        <Box className={classes.mainBox}>
          <Header
            headerText="Already have an account?"
            href="/login"
            to="/login"
            variant="contained"
            size="large"
            buttonText="Login"
          />
          <Box className={classes.formBox}>
            <form onSubmit={handleRegister} className={classes.formContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.mainFormGrid}
              >
                <Grid container className={classes.formGrid}>
                  <FormText text="Create an account." />
                </Grid>
                <Grid container className={classes.formGrid}>
                  <FormControl
                    margin="normal"
                    required
                    className={classes.formControl}
                  >
                    <TextField
                      aria-label="username"
                      label="Username"
                      name="username"
                      type="text"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid className={classes.formGrid}>
                  <FormControl
                    margin="normal"
                    required
                    className={classes.formControl}
                  >
                    <TextField
                      label="E-mail address"
                      aria-label="e-mail address"
                      type="email"
                      name="email"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid container className={classes.formGrid}>
                  <FormControl
                    error={!!formErrorMessage.confirmPassword}
                    className={classes.formControl}
                  >
                    <TextField
                      aria-label="password"
                      label="Password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="password"
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid container className={classes.formGrid}>
                  <FormControl
                    error={!!formErrorMessage.confirmPassword}
                    className={classes.formControl}
                  >
                    <TextField
                      label="Confirm Password"
                      aria-label="confirm password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="confirmPassword"
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className={classes.createButton}
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Signup;
