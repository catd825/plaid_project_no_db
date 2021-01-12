import React from "react";
import { PlaidLink } from "react-plaid-link";
// import axios from "axios";

const Link = props => {
  const onExit = (error, metadata) => console.log('onExit', error, metadata);
  
  const onEvent = (eventName, metadata) => {
    // console.log('onEvent', eventName, metadata);
    // if(metadata === 'OPEN') {
      // props.getToken()
    // }
  }
  
  const onSuccess = (token, metadata) =>{
    // console.log('onSuccess', token, metadata);
  }




  return (
    <>
      <PlaidLink
        className="CustomButton"
        style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
        token={props.token ? props.token : ''}
        onExit={onExit}
        onSuccess={onSuccess}
        onEvent={onEvent}
      >
        Open Link and connect your bank!
      </PlaidLink>
    </>
  );
}

export default Link;