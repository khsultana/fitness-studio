import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg'
import Introduction from '../Introduction-Part/Introduction';
import Show from '../ShowCard/Show';
import './List.css'

const List = () => {
    const [list, setList] = useState([])
    const [time, setTime] = useState([])
    useEffect(() => {
        fetch('Items.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    const handlerButton = (lists) => {
        const newTime = [...time, lists]
        setTime(newTime)
        console.log('Click')
    }


    return (
        <div className='Main-Container'>
            <div className='Card'>
                <div className="Logo-Container">
                    <img src={logo} alt="" />
                    <h2>Fitness Plus Gym & Health Club </h2>
                </div>
                <div className="Title-Container">
                    <h3>Select Your Today's Choice </h3>
                </div>
                <div className="Card-Container">
                    {
                        list.map(lists => <Show
                            key={lists._id}
                            lists={lists}
                            handlerButton={handlerButton}

                        ></Show>)
                    }
                </div>
            </div>

            <div className='Introduction-Container'>

                <Introduction
                    time={time}
                ></Introduction>
            </div>
        </div>
    );
};

export default List;