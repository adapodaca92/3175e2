import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FilledInput,
  InputAdornment,
  Input as ImageInput,
  InputLabel,
  Typography,
} from '@material-ui/core';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  addImagesIcon: {
    color: '#D1D9E6',
    height: '20px',
    width: '18px',
    margin: '25px 30px',
    cursor: 'pointer',
  },
  imgInput: {
    display: 'none',
  },
  numOfImagesChosen: {
    color: '#9CADC8',
    position: 'relative',
    right: '110px',
    width: '150px',
  },
  attachmentPreview: {
    paddingLeft: '90px',
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    let files = event.currentTarget.files;
    files = [...files];
    const data = await Promise.all(
      files.map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'my-uploads');
        console.log(formData);
        const imageData = axios
          .post(
            'https://api.cloudinary.com/v1_1/duwtxqhir/image/upload',
            formData,
            {
              transformRequest: [
                (data, headers) => {
                  console.log(headers);
                  console.log(data);
                  delete headers['x-access-token'];
                  return data;
                },
              ],
            }
          )
          .then((res) => res.data);
        return imageData;
      })
    );
    const imageUrls = data.map((image) => image.secure_url);
    setImages(imageUrls);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: images,
    };
    await postMessage(reqBody);
    setText('');
    setImages([]);
  };

  return (
    <form method="post" className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <ImageInput
                type="file"
                name="file"
                id="imgupload"
                inputProps={{ multiple: true }}
                className={classes.imgInput}
                onChange={(event) => handleImageUpload(event)}
              />
              <InputLabel
                htmlFor="imgupload"
                className={`${classes.addImagesIcon} ${classes.attachmentPreview}`}
              >
                {images.length > 0 ? (
                  <Typography className={classes.numOfImagesChosen}>
                    {`${images.length} ${
                      images.length > 1 ? 'attached images' : ' attached image'
                    }`}
                  </Typography>
                ) : (
                  <AddToPhotosIcon />
                )}
              </InputLabel>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
