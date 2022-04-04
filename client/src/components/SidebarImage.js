import React from 'react';
import image from '../assets/bg-img.png';
import bubble from '../assets/bubble.svg';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    position: 'relative',
    height: '100%',
    width: '60%',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '300px',
    },
  },
  backgroundImage: {
    width: '100%',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
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

    [theme.breakpoints.down('sm')]: {
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
}));

const SidebarImage = () => {
  const classes = useStyles();

  return (
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
  );
};

export default SidebarImage;
