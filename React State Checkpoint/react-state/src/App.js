
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Bonjour je me nomme Aboubacar Camara',
        bio: 'Je suis un Developpeur FullStack',
        profession: 'Developpeur FullStack'
      },
      shows: false,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        timeInterval: this.state.timeInterval + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({
      shows: !this.state.shows
    });
  };

  render() {
    const { Person, shows } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Decouvre moi!</button>
        {shows && (
          <div>
            <h3>{Person.fullName}</h3>
            <p>{Person.bio}</p>
            <img src={Person.imgSrc} alt="profile" />
            <p>Profession: {Person.profession}</p>
            <p>Temps écoulé depuis le montage du composant: {this.state.timeInterval} seconds.</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;