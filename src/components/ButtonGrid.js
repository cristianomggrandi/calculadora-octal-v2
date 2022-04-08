import React from "react";
import Button from "./Button";

export default class ButtonGrid extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Button content='0' />
                        <Button content='1' />
                        <Button content='2' />
                        <Button content='3' />
                    </tr>
                    <tr>
                        <Button content='4' />
                        <Button content='5' />
                        <Button content='6' />
                        <Button content='7' />
                    </tr>
                    <tr>
                        <Button content='+' />
                        <Button content='-' />
                        <Button content='/' />
                        <Button content='*' />
                    </tr>
                </tbody>
            </table>

        );
    }
}