import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h2>Info</h2>
        <p>The info is : {props.info}</p>
    </div>
);

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : 'you should not be here'}
        </div>
    )
}

const AuthInfo = requireAuth(Info)
// ReactDOM.render(<Info info="ther some info"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info={'this are the details'}/>, document.getElementById('app'));
