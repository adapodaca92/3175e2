## Description

Please include a summary of the changes and a link to which issue is fixed.

Closes #3

The changes made were implementing the ability to upload images, while creating the attachments array and setting it to the URL(s) of the images. Then implementing the feature to send those images as part of a message, and making sure the UI is updated for different image sending scenarios.

## Notes on your approach and thought process

Please leave some notes explaining your thought process and your approach to solving this issue.

My thought process was to use an InputAdornment to implement the ability, using a handler, to upload images to the input of the ActiveChat by using a POST method to the Cloudinary API. Then after I created an array of the image URL(s) and set that to the attachments array of the message. Then passing the attachments as props to the SenderBubble to allow for the images to display as a message. Then I updated the UI to show as expected by the given specs for different scenarios.

## Further comments (optional)
