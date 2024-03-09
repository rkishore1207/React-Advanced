import React from 'react';

const Avatar = (props) => {
    return (
        <div className='avatar-container'>
            <img src={props.avatar} alt = "Avatar"/>
        </div>
    );
}

export default Avatar;