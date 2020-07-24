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
      className="row"
    >
      <textarea
        id="enter-message"
        name="enter-message"
        type="text"
        className="input form-control"
        placeholder="Type a Message and click Enter"
        value={text}
        onChange={changeHandler}
      ></textarea>
      <button id="btnSend" name="btnSend" type="submit">
        Send
      </button>
    </form>
  );
}
