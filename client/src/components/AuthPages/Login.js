import React, { useEffect } from 'react';
import SidebarImage from './SidebarImage';
import Header from './Header';
import FormText from './FormText';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Button,
  FormControl,
  TextField,
  InputAdornment,
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
  mainFormGrid: {
    width: '100%',
  },
  formContainer: {
    height: '45%',
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
    margin: '35px 0',

    [theme.breakpoints.down('sm')]: {
      margin: '20px 0',
    },
  },
  loginButton: {
    backgroundColor: '#3A8DFF',
    borderRadius: '3px',
    color: 'white',
    height: '56px',
    width: '160px',
    fontSize: '16px',
    marginTop: '20px',

    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      marginBottom: '10px',
    },
  },
  endAdornment: {
    color: '#3A8DFF',
  },
}));

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
      <SidebarImage />
      <Grid container className={classes.mainGrid}>
        <Box className={classes.mainBox}>
          <Box>
            <Header
              headerText="Don't have an account?"
              href="/register"
              to="/register"
              variant="contained"
              size="large"
              buttonText="Create account"
            />
            <form onSubmit={handleLogin} className={classes.formContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.mainFormGrid}
              >
                <Grid container className={classes.formGrid}>
                  <FormText text="Welcome Back!" />
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
                      label="Password"
                      aria-label="password"
                      type="password"
                      name="password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <span className={classes.endAdornment}>
                              Forgot?
                            </span>
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
        </Box>
      </Grid>
    </div>
  );
};

export default Login;
