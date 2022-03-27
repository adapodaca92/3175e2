## Description

Please include a summary of the changes and a link to which issue is fixed.

Closes #1

The first change I made was making the postMessage function async. The second change was creating a variable to copy the conversations state inside the addMessageToConversations useCallback function, as well as in the addNewConvo function. The last change was that I reveresed the messages array inside of fetchConversations function inside of the useEffect.

## Notes on your approach and thought process

Please leave some notes explaining your thought process and your approach to solving this issue.

My thought process first began with making sure that I was able to access all information in the data such as messages, conversationId, etc. When noticing that the messages array was logging as undefined inside of the addMessageToConversation function, I realized the postMessage function was not async and in that function we call the saveMessage function that is async. When fixing that I also noticed that the conversations still would not update immediately so I created a variable to copy the conversations state inside the addMessagesToConversation and addNewConvo functions to be able to manipulate the data to push the new message immediately. To have the messages appear in the correct order, I reversed the array of messages inside of the useEffect when we fetch the conversations.

## Further comments (optional)
