import React from 'react';
import {render} from 'react-dom';
import Axios from 'axios';
import {connect} from 'react-redux';

class Test extends React.Component {

    componentDidMount() {

        Axios.get("/test")
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    createMarkup() {
        return {__html: this.props.userList};
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={this.createMarkup()} />
        )
    }
}



const mapStateToProps = (state) => {
    return {
        userList : state.userList.prismicHTML.getStructuredText('terms.content').asHtml()
    }
};

export default connect(mapStateToProps)(Test);
