import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import image from './assets/bg-img.png';
import bubble from './assets/bubble.svg';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',

    ['@media (max-width: 767px)']: {
      flexDirection: 'column',
      overflowX: 'hidden',
    },
  },
  leftContainer: {
    position: 'relative',
    height: '100%',
    width: '50%',

    ['@media (max-width: 767px)']: {
      width: '100%',
      height: '300px',
    },
  },
  backgroundImage: {
    width: '100%',
    height: '100%',

    ['@media (max-width: 767px)']: {
      objectFit: 'cover',
      objectPosition: 'top',
    },
  },
  backgroundImageColor: {
    background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
    position: 'absolute',
    zIndex: '1',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    opacity: '0.85',
  },
  imageContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    zIndex: '2',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    marginBottom: '175px',

    ['@media (max-width: 767px)']: {
      margin: 'auto',
    },
  },
  imageText: {
    width: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: '26px',
    fontFamily: 'Open Sans',
    marginTop: '50px',
  },
  bubbleImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '40px 80px',
    gap: '40px',

    ['@media (max-width: 767px)']: {
      justifyContent: 'center',
      padding: '40px',
    },
  },
  formContainer: {
    height: '65%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    width: '100%',
    margin: '45px 0px',

    ['@media (max-width: 767px)']: {
      margin: '20px 0',
    },
  },
  formText: {
    width: '75%',
    maxWidth: '500px',
    top: '250px',
    fontSize: '26px',
    fontWeight: '600',
    fontFamily: 'Open Sans',
    marginRight: '200px',

    ['@media (max-width: 767px)']: {
      width: '100%',
      maxWidth: 'unset',
      marginRight: '0',
    },
  },
  registerButton: {
    backgroundColor: 'white',
    color: '#3A8DFF',
    textDecoration: 'none',
    padding: '18px 36px',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
  },
  loginButton: {
    backgroundColor: '#3A8DFF',
    color: 'white',
    padding: '16px 64px',

    ['@media (max-width: 767px)']: {
      marginTop: '-20px',
      marginBottom: '10px',
    },
  },
});

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <Box
          component="img"
          src={image}
          alt="background"
          className={classes.backgroundImage}
        />
        <div className={classes.backgroundImageColor} />
        <div className={classes.imageContent}>
          <img src={bubble} height={65} width={67} alt="background" />
          <div className={classes.imageText}>
            Converse with anyone with any language
          </div>
        </div>
      </div>
      <Grid container justifyContent="center">
        <Box width="100%" padding="20px">
          <Grid container item className={classes.header}>
            <Typography style={{ color: '#bababa' }}>
              Don't have an account?
            </Typography>
            <Link
              href="/register"
              to="/register"
              style={{ textDecoration: 'none' }}
            >
              <Button
                className={classes.registerButton}
                variant="contained"
                size="large"
              >
                Create account
              </Button>
            </Link>
          </Grid>
          <form onSubmit={handleLogin} className={classes.formContainer}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{ width: '100%' }}
            >
              <Grid container style={{ width: '75%', maxWidth: '600px' }}>
                <Typography className={classes.formText}>
                  Welcome Back!
                </Typography>
              </Grid>
              <Grid container style={{ width: '75%', maxWidth: '600px' }}>
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
                  />
                </FormControl>
              </Grid>
              <Grid
                style={{
                  width: '75%',
                  maxWidth: '600px',
                  marginBottom: '50px',
                }}
              >
                <FormControl
                  margin="normal"
                  required
                  className={classes.formControl}
                >
                  <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <span style={{ color: '#3A8DFF' }}>Forgot?</span>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className={classes.loginButton}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </div>
  );
};

export default Login;
