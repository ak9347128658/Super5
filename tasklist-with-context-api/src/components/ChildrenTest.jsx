import React from 'react';

function ChildrenTest({children,title}) {
    return (
        <div>
            <h1>I am Above Children</h1>
            {children}
            <h1>I am Below Children</h1>
            <h1>{title}</h1>
        </div>
    );
}

export default ChildrenTest;