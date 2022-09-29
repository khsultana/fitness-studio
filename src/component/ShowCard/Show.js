import React from 'react';
import './Show.css'

const Show = (props) => {
    const { name, picture, about, age, time } = props.lists

    return (
        <div className='Show-Container'>
            <img src={picture} alt="" />
            <div className='Inner-Card'>
                <h3>{name}</h3>
                <p>{about}</p>
                <p><b>Age For:</b> {age} Years</p>
                <p><b>Time ReQ:</b> {time}s</p>
            </div>

            <button onClick={() => props.handlerButton({ time })} className='btn'><p>Add to List</p></button>
        </div>
    );
};

export default Show;