import React, { useState, useEffect } from 'react';
import { FormControl,Input, } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import Flipmove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');

  useEffect(() => {
    // run when the app components loadsd
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )

  useEffect(() => {
    // running the code here
    // if its black inside [], htis code run once when the app commponent loads
    // if we ahve a vae=raible like input, it runs every time input changes

    // setting up the username
    setUsername(prompt('please enter your name : '))
  }, [] )



  const sendMessage = (event) => {
    event.preventDefault();
    // all logic for sending messages
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');

  }

  return (
    <div className="App">
      <img src="https://img.icons8.com/fluent/144/000000/chat.png" alt="logo"/>
      <h1>CHAT - ON</h1>
      <h2>Welcome {username}</h2>

     <form className="app__form">

     <FormControl className="app__formcontrol">
      
      <Input className="app__input" placeholder="Enter a message...." value={input} onChange={event => setInput(event.target.value)} />


      <IconButton className="app__iconbutton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
        <SendIcon />
      </IconButton>
      
    </FormControl>

    </form>
    
    <Flipmove>
     {
       messages.map(({id, message}) => (
         <Message key={id} username={username} message={message}/>
       
       ))
     }
    </Flipmove>





    </div>
  );
  
  
}

export default App;
