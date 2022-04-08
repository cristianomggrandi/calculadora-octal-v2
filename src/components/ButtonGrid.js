import React from "react";
import Button from "./Button";

export default class ButtonGrid extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td><Button content='0' /></td>
                        <td><Button content='1' /></td>
                        <td><Button content='2' /></td>
                        <td><Button content='3' /></td>
                    </tr>
                    <tr>
                        <td><Button content='4' /></td>
                        <td><Button content='5' /></td>
                        <td><Button content='6' /></td>
                        <td><Button content='7' /></td>
                    </tr>
                    <tr>
                        <td><Button content='+' /></td>
                        <td><Button content='-' /></td>
                        <td><Button content='/' /></td>
                        <td><Button content='*' /></td>
                    </tr>
                </tbody>
            </table>

        );
    }
}