import React, { useEffect } from 'react';
import SidebarImage from './components/SidebarImage';
import { Link, useHistory } from 'react-router-dom';
import { useStyles } from './styles/Styles';
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

const loginStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down('sm')]: {
      padding: '40px',
    },
  },
  dontHaveAccount: {
    color: '#B0B0B0',
    fontSize: '14px',
  },
  formContainer: {
    height: '45%',
  },
  registerButton: {
    backgroundColor: 'white',
    color: '#3A8DFF',
    textDecoration: 'none',
    width: '170px',
    height: '54px',
    borderRadius: '5px',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
  },
  loginButton: {
    backgroundColor: '#3A8DFF',
    borderRadius: '3px',
    color: 'white',
    height: '56px',
    width: '160px',
    marginTop: '20px',

    [theme.breakpoints.down('sm')]: {
      color: 'red',
      marginTop: '20px',
      marginBottom: '10px',
    },
  },
}));

const Login = ({ user, login, props }) => {
  const history = useHistory();
  const loginClasses = loginStyles();
  const defaultClasses = useStyles();

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
    <div className={defaultClasses.root}>
      <SidebarImage />
      <Grid container justifyContent="center">
        <Box width="100%">
          <Grid
            container
            item
            className={`${loginClasses.header} ${defaultClasses.header}`}
          >
            <Typography className={loginClasses.dontHaveAccount}>
              Don't have an account?
            </Typography>
            <Link
              href="/register"
              to="/register"
              style={{ textDecoration: 'none' }}
            >
              <Button
                className={loginClasses.registerButton}
                variant="contained"
                size="large"
              >
                Create account
              </Button>
            </Link>
          </Grid>
          <form
            onSubmit={handleLogin}
            className={`${loginClasses.formContainer} ${defaultClasses.formContainer}`}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{ width: '100%' }}
            >
              <Grid container className={defaultClasses.formGrid}>
                <Typography className={defaultClasses.formText}>
                  Welcome Back!
                </Typography>
              </Grid>
              <Grid container className={defaultClasses.formGrid}>
                <FormControl
                  margin="normal"
                  required
                  className={defaultClasses.formControl}
                >
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <Grid className={defaultClasses.formGrid}>
                <FormControl
                  margin="normal"
                  required
                  className={defaultClasses.formControl}
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
                  className={loginClasses.loginButton}
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
