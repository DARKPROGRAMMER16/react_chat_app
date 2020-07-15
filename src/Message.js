import React,{forwardRef} from 'react'
import {Card,CardContent,Typography} from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message,username},ref) => {
    const isuser = username === message.username;
    return (
        <div ref={ref} className={`message_card ${isuser && 'message_user'}`}>
            <Card className={isuser ? "messageusercard" : "messageguestcard"}>
                <CardContent>
                    <Typography 
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isuser && `${message.username || 'Unknown user'} : `}  {message.message}
                    </Typography>
                </CardContent>
            </Card>

        </div>
            
        
    )
})

export default Message
