import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJoke } from "../../redux";
import "./Joke.css";

//props: ({loading, joke, error})
function Joke({ joke, fetchJoke }) {
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="Joke">
      <div>{joke}</div>
      <button>Generate New Joke</button>
    </div>
  );
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
