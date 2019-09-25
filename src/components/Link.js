import React from 'react';

const Link = ({ active, children, onClick }) => {

    if (active) {
        /*
        if it's active we want it to be "not clickable"
         */
        return <span>{children}</span>;
    }

    return (
        <a href="#" onClick={ e => {e.preventDefault(); onClick();} } >
            {children}
        </a>
    );
};

export default Link;
