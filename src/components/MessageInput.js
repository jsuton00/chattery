import React, { useState } from 'react';

export default function MessageInput(props) {
  const [text, setText] = useState('');
  const { onSendMessage } = props;

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitMessage = (e) => {
    e.preventDefault();
    setText('');
    onSendMessage(text);
  };

  return (
    <form
      id="message-input"
      name="message-input"
      onSubmit={submitMessage}
      className="form row"
    >
      <textarea
        id="enter-message"
        name="enter-message"
        type="text"
        className="input-message form-control"
        placeholder="Type a Message and click Enter"
        rows="1"
        value={text}
        onChange={changeHandler}
      ></textarea>
      <button id="btnSend" name="btnSend" className="button" type="submit">
        Send
      </button>
    </form>
  );
}
