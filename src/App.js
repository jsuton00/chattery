import React, { Component } from 'react';
import MessageInput from './components/MessageInput';
import Messages from './components/Messages';
import { randomName, randomColour } from './utils/GenerateUsername';

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColour(),
    },
  };
  componentDidMount() {
    this.drone = new window.Scaledrone('G1aTSlBNFsaGZtug', {
      data: this.state.member,
    });
    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({ room: 'observable-room', message });
  };
  render() {
    return (
      <div id="app" className="app container container-fluid">
        <header id="app-header" className="app-header row">
          <div id="app-title" className="app-title col-12">
            <h1>Chattery</h1>
          </div>
        </header>
        <main id="app-main" className="app-main container container-fluid">
          <Messages
            messages={this.state.messages}
            currentMember={this.state.member}
          />
          <MessageInput onSendMessage={this.onSendMessage} />
        </main>
      </div>
    );
  }
}

export default App;
