import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginBottom: '10px',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  oneAttachment: {
    height: 150,
    width: 173,
    borderRadius: '0 10px 10px 10px',
  },
  multipleAttachments: {
    height: 150,
    width: 173,
    borderRadius: '0 10px 10px 10px',
    marginLeft: 8,
    marginTop: 10,
  },
  multipleImagesBox: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box className={classes.messageBox}>
        {attachments?.length > 1 && (
          <>
            {text && (
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
            {attachments.map((attachment, id) => (
              <Box
                key={id}
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
            {text && (
              <Box className={classes.bubble}>
                <Typography className={classes.text}>{text}</Typography>
              </Box>
            )}
          </>
        )}

        {attachments?.length > 1 && (
          <Typography className={classes.date}>{time}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
