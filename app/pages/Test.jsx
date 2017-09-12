import React from 'react';
import {render} from 'react-dom';
import Axios from 'axios';

export default class Test extends React.Component {

    componentDidMount() {

        Axios.get("/test")
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>{"Test page......"}</div>
        )
    }
}
