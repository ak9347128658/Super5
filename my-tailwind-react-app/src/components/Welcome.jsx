import React from 'react';

function Welcome(props) {
    return (
        <div>
            <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
    );
}

export default Welcome;