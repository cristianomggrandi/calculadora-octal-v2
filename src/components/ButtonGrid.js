import React from "react";
import Button from "./Button";

export default class ButtonGrid extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Button class='button-number' content='0' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-number' content='1' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-number' content='2' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-number' content='3' onClick={(i, type) => this.props.onClick(i, type)} />
                    </tr>
                    <tr>
                        <Button class='button-number' content='4' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-number' content='5' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-number' content='6' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-number' content='7' onClick={(i, type) => this.props.onClick(i, type)} />
                    </tr>
                    <tr>
                        <Button class='button-operator' content='+' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-operator' content='-' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-operator' content='/' onClick={(i, type) => this.props.onClick(i, type)} />
                        <Button class='button-operator' content='x' onClick={(i, type) => this.props.onClick(i, type)} />
                    </tr>
                    <tr>
                        <Button class='button-equals' content='=' onClick={(i, type) => this.props.onClick(i, type)} span='3' />
                        <Button class='button-clear' content='C' onClick={(i, type) => this.props.onClick(i, type)} />
                    </tr>
                </tbody>
            </table>

        );
    }
}