import React from "react";
import Button from "./Button";

export default class ButtonGrid extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Button content='0' onClick={(i) => this.props.onClick(i)} />
                        <Button content='1' onClick={(i) => this.props.onClick(i)} />
                        <Button content='2' onClick={(i) => this.props.onClick(i)} />
                        <Button content='3' onClick={(i) => this.props.onClick(i)} />
                    </tr>
                    <tr>
                        <Button content='4' onClick={(i) => this.props.onClick(i)} />
                        <Button content='5' onClick={(i) => this.props.onClick(i)} />
                        <Button content='6' onClick={(i) => this.props.onClick(i)} />
                        <Button content='7' onClick={(i) => this.props.onClick(i)} />
                    </tr>
                    <tr>
                        <Button content='+' onClick={(i) => this.props.onClick(i)} />
                        <Button content='-' onClick={(i) => this.props.onClick(i)} />
                        <Button content='/' onClick={(i) => this.props.onClick(i)} />
                        <Button content='*' onClick={(i) => this.props.onClick(i)} />
                    </tr>
                </tbody>
            </table>

        );
    }
}