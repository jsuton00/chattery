import React from 'react';

export default function Messages(props) {
  const { messages, currentMember } = props;

  const renderMessage = (message) => {
    const { member, text } = message;
    console.log(member);
    const messageFromMe = member.id === currentMember.id;
    return (
      <li
        key={Math.random()}
        className={
          messageFromMe ? 'messages-message currentMember' : 'messages-message'
        }
      >
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        >
          <div className="message-content">
            <div className="username">{member.clientData.username}</div>
            <div className="text">{text}</div>
          </div>
        </span>
      </li>
    );
  };

  return (
    <ul className="messages-list">
      {messages && messages.map((m) => renderMessage(m))}
    </ul>
  );
}
