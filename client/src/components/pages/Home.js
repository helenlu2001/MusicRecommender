import React, { Component } from "react";
import Card from "../modules/Card.js";
import "./smr.css";
import { get, post } from "../../utilities.js";
import { useLocation } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        topTracks: [],
        card: [],
    };
  }

  componentDidMount() {    
    let query = new URLSearchParams(this.props.location.search);
    console.log(query.get('code'));
    post("/api/token", {code: query.get('code')})
      .then((res) => {
        this.setState({access_token: res.token})
        get('/api/top', {token: this.state.access_token})
          .then((tracks) => {
            console.log(tracks.tracks)
            // this.setState({topTracks: tracks.tracks});
          });
      });


    // fetch('http://localhost:3000/create')
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({card:<Card title={data.tracks[0]['title']} artists={data.tracks[0]['artist']} img={data.tracks[0]['img']}/> });

    //   let rows = [];
    //   for(let i = 1; i < data.tracks.length + 1; i++) {
    //       rows.push(<Card title={data.tracks[i-1]['title']} artists={data.tracks[i-1]['artist']} img={data.tracks[i-1]['img']}/>)          
    //   }
    //   this.setState({topTracks: rows})
  
    // });

  }

  render() {
    console.log(this.state.topTracks);
    let tracks = this.state.topTracks.map((track) => {
      return <Card title={track.title} artists={track.artists} img={track.img}/>
    })

    return (
          <>
            <div className='Home-title'> <span> — </span> JUST FOR YOU <span> — </span> </div>
            <div className='Home-recContainer'> 
              {tracks}
            </div>
          </>
        );
  }
}

export default Home;
