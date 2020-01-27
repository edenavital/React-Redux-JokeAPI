import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJoke } from "../../redux";
import "./Joke.css";

//props: ({loading = true/false, joke = {}, error = ""})
/*if (joke.type === "single") {
    return <p>{joke.joke}</p>;
  } else {
    return (
      <div>
        <h4>{joke.setup}</h4>
        <p>{joke.delivery}</p>
      </div>
    );
  }*/

class Joke extends Component {
  componentDidMount() {
    this.props.fetchJoke();
  }

  render() {
    //Destructure from API
    const { type, joke, setup, delivery } = this.props.joke;
    const errorMessage = this.props.error;

    const randomJoke =
      type === "single" ? (
        <p>{joke}</p>
      ) : type === "twopart" ? (
        <div>
          <h4>{setup}</h4>
          <p>{delivery}</p>
        </div>
      ) : (
        <p>{errorMessage}</p>
      );

    return (
      <div className="Joke">
        <button onClick={this.props.fetchJoke}>Generate New Joke</button>
        <div>{randomJoke}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    joke: state.joke,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchJoke: () => dispatch(fetchJoke())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Joke);
