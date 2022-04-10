import React from "react";
import Button from "./Button";

export default class ButtonGrid extends React.Component {

    handleClick(i) {
        console.log(i);
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Button content='0' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='1' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='2' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='3' onClick={(i) => {this.handleClick(i)}} />
                    </tr>
                    <tr>
                        <Button content='4' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='5' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='6' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='7' onClick={(i) => {this.handleClick(i)}} />
                    </tr>
                    <tr>
                        <Button content='+' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='-' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='/' onClick={(i) => {this.handleClick(i)}} />
                        <Button content='x' onClick={(i) => {this.handleClick(i)}} />
                    </tr>
                </tbody>
            </table>

        );
    }
}