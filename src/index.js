import React, { Component } from "react";
import "./assets/style.css";
import ReactDOM from "react-dom";
import quizService from "./quizService";

class QuizBee extends Component {
    state = {
        questionBank: []
    };
    render() {
        return (
            <div className="container">
            <div className="title"> 
            QuizBee
            </div>
            </div>
        );
    }
}

ReactDOM.render(<QuizBee/>, document.getElementById("root"));

