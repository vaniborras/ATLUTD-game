import React, { Component } from 'react';
import logo from './logo.svg';
import playerCard from './components/playerCard';
import Wrapper from './components/Wrapper';
// import Title from './components/Title';
import Players from './Players.json';
import './App.css';

class App extends Component {

  state = {
    player: [
      {
        "id": 1,
        "name": "Almiron",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Almiron_Headshot.png?5BB4nxEG73Bb1KBq7_Dx5rcYKocGmj45&itok=titnZ95O",
        "position": "Midfielder"
      },
      {
        "id": 2,
        "name": "Martinez",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Martinez_Headshot.png?2PuofmUGnico8ABC21C_Dle_uAmMQKEF&itok=qddXAljh",
        "position": "Forward"
      }, {
        "id": 3,
        "name": "McCann",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/McCann_Headshot.png?XQs1xCdMsgo23rq4CRPU9HGsRweEY0HO&itok=bC0mP64T",
        "position": "Midfielder"
      }, {
        "id": 4,
        "name": "Gressel",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Gressel_Headshot.png?YkBbaPk55.kvLPyQPg.jQGsUaLVnQlYR&itok=LAy46cSz",
        "position": "Midfielder"
      }, {
        "id": 5,
        "name": "Guzan",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Guzan_Headshot.png?QySK1PUnjmGf2zPVXh1fTSUVqOlIVpxI&itok=xibsuVEC",
        "position": "Goalkeeper"
      }, {
        "id": 6,
        "name": "Carleton",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Carleton_Headshot.png?rWRLwmPc_IjPDY4AgApb6QpXgdpNsfaS&itok=OfxbmxWK",
        "position": "Midfielder"
      }, {
        "id": 7,
        "name": "Barco",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Barco_Headshot_0.png?1Uajq92RHnD5JCDaXX9HtlaWZu9C34Ll&itok=OkkEiipg",
        "position": "Midfielder"
      }, {
        "id": 8,
        "name": "Nagbe",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Nagbe_Headshot.png?xEcta6vpmc45XipOhCVy.cdLJ1RjIDng&itok=z_yksdSd",
        "position": "Midfielder"
      }, {
        "id": 9,
        "name": "Parkhurst",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Parkhurst_Headshot.png?jMtu3IHkmmui0dCwMFSyXIYZt1LQoeh9&itok=MdOpN3bY",
        "position": "Defender"
      }, {
        "id": 10,
        "name": "Villalba",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Villalba_Headshot.png?sdYMFvptDeMu5_MtYAnKFJQvhoMJlOSK&itok=3GuiploK",
        "position": "Forward"
      }, {
        "id": 11,
        "name": "Larentowicz",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Larentowicz_Headshot.png?CXsb_1h9Fkd88G4N1IyxDrwpBk9H4Nwh&itok=8jGiZOF2",
        "position": "Midfielder"
      }, {
        "id": 12,
        "name": "Kratz",
        "image": "https://atlanta-mp7static.mlsdigital.net/styles/image_player_headshot/s3/Kratz_Headshot.png?kBKYKWHC9pAYZDUPtIEv9iCByxkgm9Wb&itok=uhG4b5io",
        "position": "Midfielder"
      }
    ],

    counter: 0,
    topScore: 0
  };

  sortImages = (id, clicked) => {

    const imageOrder = this.state.image;

    if (clicked) {
      console.log("true");
      imageOrder.forEach((img, index) => {
        imageOrder[index].clicked = false;

      });
      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        topScore: this.state.counter,
        counter: 0
      })
    }
    else {
      console.log("false");
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
          imageOrder[index].clicked = true;

        }
      });
      return this.setState({ image: imageOrder.sort(() => Math.random() - 0.5), counter: this.state.counter + 1 })
    }
  };

  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.counter}
          topScore={this.state.topScore}
        />
        {this.state.image.map(image => (
          <Images
            key={image.id}
            sortImages={this.sortImages}
            id={image.id}
            src={image.image}
            clicked={image.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

  // render() {
  //   return (
  //     // <Title>
  //     //     <img src={logo} className="App-logo" alt="logo" />
  //     //     <h1 className="App-title">Atlanta United Players</h1>
  //     // </Title>
  //     <Wrapper>
  //       <title>ATL UTD PLAYERS</title>
  //       {Players.map(player => (
  //         <playerCard
  //           id={player.id}
  //           key={player.id}
  //           name={player.name}
  //           image={player.image}
  //           position={player.position}
  //         />
  //       ))}
  //     </Wrapper>
  //   )
  // }

export default App;
