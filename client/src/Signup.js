import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SidebarImage from './components/SidebarImage';
import { useStyles } from './styles/Styles';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';

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
      <Grid container justifyContent="center">
        <Box width="100%">
          <Grid container item className={classes.header}>
            <Typography className={classes.alreadyHaveAccount}>
              Already have an account?
            </Typography>
            <Link href="/login" to="/login" style={{ textDecoration: 'none' }}>
              <Button
                className={classes.loginButton}
                variant="contained"
                size="large"
              >
                Login
              </Button>
            </Link>
          </Grid>
          <form onSubmit={handleRegister} className={classes.formContainer}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{ width: '100%' }}
            >
              <Grid container className={classes.formGrid}>
                <Typography className={classes.formText}>
                  Create an account.
                </Typography>
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
      </Grid>
    </div>
  );
};

export default Signup;
