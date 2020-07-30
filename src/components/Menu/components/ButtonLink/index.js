import React from 'react';

function ButtonLink(props) {
    return(
        <a className={props.className} href={props.href}></a>
    )
}

export default ButtonLink;