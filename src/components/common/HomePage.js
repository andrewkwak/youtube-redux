import React, { Component } from 'react';
import * as youtubeAction from '../../actions/youtubeAction';
import { connect } from 'react-redux';


class Home extends Component {

  render(){

    let searchInput
    return (
      <div>
        <h1>Home</h1>
        <form onSubmit={e => {
          e.preventDefault();
          console.log(searchInput.value)
          this.props.getSearch(searchInput.value)
          e.target.reset()
        }}>
          <input
            type="text"
            ref={ node => { searchInput = node }}
          />
          <input type="submit" />
        </form>

        <hr />

        <ul>
          <h3>Videos</h3>
          {this.props.videos.map((v, i) => {
            console.log("andrew", v)
            return <li key={i}>{v.snippet.title}</li>;
          }
          )}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    listOfVideos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearch: input => dispatch(youtubeAction.getVideos(input))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
