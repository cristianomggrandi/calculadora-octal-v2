import React from "react";

export default class Button extends React.Component {

    static operatorOptions = ['+', '-', '/', 'x'];

    constructor(props) {
        super(props);
        this.span = props.span;
        if (Button.operatorOptions.includes(this.props.content) || this.props.content == 'C' || this.props.content == '=') {
            this.content = this.props.content;
        } else {
            this.content = parseInt(this.props.content);
        }
    }

    render() {
        return (
            <td colSpan={this.span}><button onClick={() => { this.props.onClick(this.content) }}>{this.content}</button></td>
        );
    }
}