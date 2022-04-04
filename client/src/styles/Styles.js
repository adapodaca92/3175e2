import { makeStyles } from '@material-ui/core';

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
  formContainer: {
    height: '70%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '86px',

    [theme.breakpoints.down('sm')]: {
      margin: '20px 0',
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
    borderRadius: '3px',
    marginTop: '20px',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
    },
  },
}));

export { useStyles };
