import React from "react";

export default class Result extends React.Component {
    render() {
        return (
            <div className="result-container">
                <p id="result">{this.props.textToShow}</p>
            </div>
        );
    }
}