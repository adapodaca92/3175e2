import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  avatar: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginTop: 6,
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  oneAttachment: {
    height: 150,
    width: 173,
    borderRadius: '10px 10px 0 10px',
  },
  multipleAttachments: {
    height: 150,
    width: 173,
    borderRadius: '10px 10px 0 10px',
    marginLeft: 8,
    marginTop: 10,
    flexDirection: 'row-reverse',
  },
  multipleImagesBox: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
}));

const SenderBubble = ({ time, text, attachments, user }) => {
  console.log(user);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {attachments?.length > 1 && (
        <>
          {text.length === 0 ? (
            ''
          ) : (
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
          )}
        </>
      )}

      {attachments?.length <= 1 && (
        <Typography className={classes.date}>{time}</Typography>
      )}

      {attachments?.length === 1 && (
        <Box
          className={classes.oneAttachment}
          component="img"
          src={attachments[0]}
          alt="attachments"
        />
      )}

      {attachments?.length > 1 && (
        <Box className={classes.multipleImagesBox}>
          {attachments.map((attachment, index) => (
            <Box
              key={index}
              className={classes.multipleAttachments}
              component="img"
              src={attachment}
              alt="attachments"
            />
          ))}
        </Box>
      )}

      {attachments?.length <= 1 && (
        <>
          {text.length === 0 ? (
            ''
          ) : (
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
          )}
        </>
      )}

      {attachments?.length > 1 && (
        <Typography className={classes.date}>{time}</Typography>
      )}

      {attachments?.length > 0 && (
        <Avatar
          alt={user.username}
          src={user.photoUrl}
          className={classes.avatar}
        />
      )}
    </Box>
  );
};

export default SenderBubble;
