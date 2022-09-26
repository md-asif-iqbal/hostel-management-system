import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const MyMeals = () => {
  const [counterMoring, setCounterMorning] = useState(1);
  const [user] = useAuthState(auth);

  const decreaseMoring = () => {
    if (counterMoring > 0) {
      setCounterMorning((count) => count - 1);
    }
  };

  const increaseMorning = () => {
    setCounterMorning((count) => count + 1);
  };

  // Count Lunch
  const [counterLunch, setCounterLunch] = useState(1);

  const decreaseLunch = () => {
    if (counterLunch > 0) {
      setCounterLunch((count) => count - 1);
    }
  };

  const increaseLunch = () => {
    setCounterLunch((count) => count + 1);
  };

  // Count Dinner
  const [counterDinner, setCounterDinner] = useState(1);

  const decreaseDinner = () => {
    if (counterDinner > 0) {
      setCounterDinner((count) => count - 1);
    }
  };

  const increaseDinner = () => {
    setCounterDinner((count) => count + 1);
  };

  const handleMils = () => {
    const morning = parseInt(counterMoring);
    const lunch = parseInt(counterLunch);
    const dinner = parseInt(counterDinner);

    const update = { morning, lunch, dinner , date };

    const url = `http://localhost:8000/meals/${user.email}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Yes");
      });
  };

  const [date, setDate] = useState(new Date());
  // console.log(date);

  const [dates, setDates] = useState();
  // const [selected, setSelected] = useState();
  const [disable, setDisable] = useState(true);
  console.log(disable);
  const today = new Date();
  const formattedDate = format(date, "PP");
  const css = `.my-selected:not([disabled]) { 
          background: #FB4051;
          color: white;
        }.my-selected:hover:not([disabled]) { 
              background: #FB4051;
              color: white;
            }`;

  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PP")}.</p>;
  }
  let todays = format(new Date(), "PP");
  let dat = format(date, "PP");
  let x = dat.slice(4, 15);
  let y = todays.slice(4, 15);
  console.log(todays);

  //   if( === date){
  //    console.log("yes");
  //   }

  useEffect(() => {
    console.log({todays})

  }, [todays])

  return (
    <div>
      <div class="container p-2 mx-auto sm:p-4 text-gray-100">
        <h1 className="text-2xl text-primary mt-20 font-mono">
          Your Montly Meals
        </h1>
        <div class="overflow-x-auto">
          <table class="min-w-full text-xs">
            <thead class="bg-gray-700">
              <tr class="text-left">
                <th class="p-3">Name</th>
                <th class="p-3">Date</th>
                <th class="p-3">Moring</th>
                <th class="p-3">Lunch</th>
                <th class="p-3 text-right">Dinner</th>
                <th class="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-opacity-20 border-gray-700 bg-gray-900">
                <td class="p-3">
                  <h1 className="text-xl text-primary mt-4">
                    {user?.displayName}
                  </h1>
                </td>
                <td class="p-3">
                  <p>Microsoft Corporation</p>
                </td>
                <td class="p-3">
                  <p>14 Jan 2022</p>
                  <p class="text-gray-400">Friday</p>
                </td>
                <td class="p-3">
                  <p>01 Feb 2022</p>
                  <p class="text-gray-400">Tuesday</p>
                </td>
                <td class="p-3 text-right">
                  <p>$15,792</p>
                </td>
                <td class="p-3 text-right">
                  <span class="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
          <div className="flex flex-col">
            <h1 className="text-lg text-white">Name</h1>
            <h1 className="text-xl text-primary mt-4">{user?.displayName}</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg text-white">Morning</h1>
            <div className="flex gap-2 items-center mx-auto mt-4">
              <button className="btn btn-primary" onClick={increaseMorning}>
                {" "}
                <span>+</span>{" "}
              </button>
              <span className="text-2xl text-white">{counterMoring}</span>
              <button className="btn btn-primary" onClick={decreaseMoring}>
                -
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg text-white">Lunch</h1>
            <div className="flex gap-2 items-center mx-auto mt-4">
              <button className="btn btn-primary" onClick={increaseLunch}>
                +
              </button>
              <span className="text-2xl text-white">{counterLunch}</span>
              <button className="btn btn-primary" onClick={decreaseLunch}>
                -
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg text-white">Dinner</h1>
            <div className="flex gap-2 items-center mx-auto mt-4">
              <button className="btn btn-primary" onClick={increaseDinner}>
                +
              </button>
              <span className="text-2xl text-white">{counterDinner}</span>
              <button className="btn btn-primary" onClick={decreaseDinner}>
                -
              </button>
            </div>
          </div>
        </div>
        {y !== x ? (
          <button
            onClick={handleMils}
            className="btn btn-primary text-xl mt-20"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleMils}
            disabled
            className="btn btn-primary text-xl mt-20"
          >
            Save
          </button>
        )}
        <div className="max-w-md bg-green-200">
          <style>{css}</style>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            onDayClick={setDates}
            disabled={{ before: today }}
            footer={footer}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyMeals;

{
  /* <div>
            <h1 className='text-2xl text-primary mt-20 font-mono'>Your Montly Meals</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-8'>
                <div className='flex flex-col'>
                    <h1 className='text-lg text-white'>Name</h1>
                    <h1 className='text-xl text-primary mt-4'>{user?.displayName}</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-lg text-white'>Morning</h1>
                    <div className="flex gap-2 items-center mx-auto mt-4">
                        <button className="btn btn-primary" onClick={increaseMorning}> <span>+</span> </button>
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
                    onDayClick={setDates}
                    disabled={{ before: new Date() }}
                    footer={footer}
                    modifiersClassNames={{
                        selected: "my-selected",
                        today: "my-today",
                    }}
                />
            </div>
        </div> */
}
