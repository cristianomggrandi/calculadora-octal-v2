import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.span = props.span;
        this.content = props.content;
    }

    render() {
        return (
            <td colSpan={this.span}><button onClick={() => this.props.onClick(parseInt(this.content))}>{this.content}</button></td>
        );
    }
}