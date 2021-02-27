import React from 'react';
import messageHoc from './Hoc';

const daHell = (props: any): any => <p>{props.name}, {props.message}</p>;

const Message = messageHoc(daHell);

export default Message;