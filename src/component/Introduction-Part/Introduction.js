import { useState } from 'react';
import './Introduction.css'

const Introduction = ({ time }) => {


    // localStorage.setItem('BreakTime', breaks)
    const [breakTime, setBreak] = useState(0)



    let totalTime = 0;
    for (const lists of time) {
        totalTime = totalTime + lists.time;
    }



    return (
        <div className='Cart'>
            <h2><center>Introduction</center></h2>



            <div>
                <h2>Add Break Time</h2>

                <div className='Break-Btn'>
                    <button onClick={() => setBreak(10)}> 10s </button>
                    <button onClick={() => setBreak(20)}> 20s </button>
                    <button onClick={() => setBreak(30)}> 30s </button>
                    <button onClick={() => setBreak(40)}> 40s </button>
                    <button onClick={() => setBreak(50)}> 50s </button>
                </div>
                <p className='break'><b>Break Time : </b> {breakTime}</p>
            </div>

            <div>
                <h2>Exercise Timing </h2>
                <p className='break'> <b>Exercise Time : </b>   {totalTime}  </p>
            </div>
        </div >
    );
};

export default Introduction;