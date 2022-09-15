import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"
import { format } from 'date-fns';
const MyMeals = () => {
    const [counterMoring, setCounterMorning] = useState(0);
    const [user] = useAuthState(auth)

    const decreaseMoring = () => {
        if (counterMoring > 0) {
            setCounterMorning(count => count - 1);
        }
    };

    const increaseMorning = () => {
        setCounterMorning(count => count + 1);
    };

    // Count Lunch 
    const [counterLunch, setCounterLunch] = useState(0);

    const decreaseLunch = () => {
        if (counterLunch > 0) {
            setCounterLunch(count => count - 1);
        }
    };

    const increaseLunch = () => {
        setCounterLunch(count => count + 1);
    };

    // Count Dinner 
    const [counterDinner, setCounterDinner] = useState(0);

    const decreaseDinner = () => {
        if (counterDinner > 0) {
            setCounterDinner(count => count - 1);
        }
    };

    const increaseDinner = () => {
        setCounterDinner(count => count + 1);
    };

    const handleMils = () => {
        const name = user?.displayName
        const email = user?.email
        const meals = parseInt(counterMoring) + parseInt(counterLunch) + parseInt(counterLunch)
        const update = { name, email, meals }
        const url = `http://localhost:8000/meals`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(update)
        })
    }
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, "PP");
    const css = `.my-selected:not([disabled]) { 
          background: #FB4051;
          color: white;
        }.my-selected:hover:not([disabled]) { 
              background: #FB4051;
              color: white;
            }`;

    return (
        <div>
            <h1 className='text-2xl text-primary mt-20 font-mono'>Your Montly Meals</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-8'>
                <div className='flex flex-col'>
                    <h1 className='text-lg text-white'>Name</h1>
                    <h1 className='text-xl text-primary mt-4'>{user?.displayName}</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-lg text-white'>Morning</h1>
                    <div className="flex gap-2 items-center mx-auto mt-4">
                        <button className="btn btn-primary" onClick={increaseMorning}>+</button>
                        <span className="text-2xl text-white">{counterMoring}</span>
                        <button className="btn btn-primary" onClick={decreaseMoring}>-</button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-lg text-white'>Lunch</h1>
                    <div className="flex gap-2 items-center mx-auto mt-4">
                        <button className="btn btn-primary" onClick={increaseLunch}>+</button>
                        <span className="text-2xl text-white">{counterLunch}</span>
                        <button className="btn btn-primary" onClick={decreaseLunch}>-</button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-lg text-white'>Dinner</h1>
                    <div className="flex gap-2 items-center mx-auto mt-4">
                        <button className="btn btn-primary" onClick={increaseDinner}>+</button>
                        <span className="text-2xl text-white">{counterDinner}</span>
                        <button className="btn btn-primary" onClick={decreaseDinner}>-</button>
                    </div>
                </div>

            </div>
            <button onClick={handleMils} className='btn btn-primary text-xl mt-20'>Save</button>
            <div className="max-w-md bg-green-200">
                <style>{css}</style>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    modifiersClassNames={{
                        selected: "my-selected",
                        today: "my-today",
                    }}
                />
            </div>
        </div>
    );
};

export default MyMeals;