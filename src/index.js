// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import StatusView from './StatusView';

// Create a react componenet
const App = function () {
    return (
        <div className="ui container comments">
            <StatusView></StatusView>
            <CommentDetail author="sam" timeAgo="Today at 4:50PM" comment="Goooood!" />
            <CommentDetail author="Alex" timeAgo="Today at 6:50PM" comment="Need to work more" />
            <CommentDetail author="Jane" timeAgo="Today at 5:30PM" comment="I want to learn react" />
            <CommentDetail author="Jhon" timeAgo="Today at 5:40PM" comment="Nice work!" />
        </div>





    );
};


// Take the raect componenet and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')

);