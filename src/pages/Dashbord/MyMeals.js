import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { mockComponent } from "react-dom/test-utils";

const MyMeals = () => {
  const [date, setDate] = useState(new Date());

  let todays = format(new Date(), "PP");
  let dat = format(date, "PP");
  let x = dat.slice(4, 15);
  let y = todays.slice(4, 15);

  let today = new Date();

  


  const dates = format(date, "PP");
  // console.log(dates);
  const css = `.my-selected:not([disabled]) { 
          background: #FB4051;
          color: white;
        }.my-selected:hover:not([disabled]) { 
              background: #FB4051;
              color: white;
            }`;




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

  const [meals ,setMeals]= useState([]);
    const url = `http://localhost:8000/meals`;

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
          
            setMeals(data)
            filterItems(data);
          });
      }, [meals]);
        
        // if(isLoading){
        //     return <Loading/>
        // }
        const filterItems = (bookings) => {
                const updatedItems = bookings.filter((item) => {
                  return item.email === user.email;
                });
                setMeals(updatedItems);

                
              };
              
  // if () {
  //   const morning = parseInt(counterMoring);
  //   const lunch = parseInt(counterLunch);
  //   const dinner = parseInt(counterDinner);
  //   const email = user.email;
  //   const name = user.displayName;
  //   const total = parseInt(morning + lunch + dinner);
  //   const update = {name, email,morning, lunch, dinner , dates, total };
  //   console.log(update);

  //   const url = `http://localhost:8000/meals`;
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(update),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       toast("Your meal is Updated");
  //       return 
  //     });
  
  // }

  const handleMils = () => {
    const morning = parseInt(counterMoring);
    const lunch = parseInt(counterLunch);
    const dinner = parseInt(counterDinner);
    const email = user.email;
    const name = user.displayName;
    const total = parseInt(morning + lunch + dinner);
    const update = {name, email,morning, lunch, dinner , dates, total };
    console.log(update);

    const url = `http://localhost:8000/meals`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Your meal is Updated");
      });
  };

  
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PP")}.</p>;
  }
 
  // console.log(todays);

  //   if( === date){
  //    console.log("yes");
  //   }

  return (
    <div>
      <div class="container p-2 mx-auto sm:p-4 text-gray-100">
        <h1 className="text-2xl text-primary mt-20 font-mono">
          Your Montly Meals
        </h1>
        <section class="bg-black ">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-auto px-4">
            <div class="overflow-x-auto">
               <table class="table-auto">
                  <thead>
                     <tr class="bg-primary text-center">
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                           >
                           Name
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           Date
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                          Moring
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           Lunch
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                            Dinner
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-r border-transparent
                           "
                           >
                           Total
                        </th>
                     </tr>
                  </thead>
                  {
                meals.map(item => ( 
                  <tbody>
                  <tr>
                     <td
                        class="
                        text-center text-black
                        font-medium
                        text-base
                        py-5
                        px-2
                        bg-[#F3F6FF]
                        border-b border-l border-[#E8E8E8]
                        "
                        >
                        {item.name}
                     </td>
                     <td
                        class="
                        text-center text-black
                        font-medium
                        text-base
                        py-5
                        px-2
                        bg-white
                        border-b border-[#E8E8E8]
                        "
                        >
                        {item.dates}
                     </td>
                     <td
                        class="
                        text-center text-black
                        font-medium
                        text-base
                        py-5
                        px-2
                        bg-[#F3F6FF]
                        border-b border-[#E8E8E8]
                        "
                        >
                        {item.morning}
                     </td>
                     <td
                        class="
                        text-center text-black
                        font-medium
                        text-base
                        py-5
                        px-2
                        bg-white
                        border-b border-[#E8E8E8]
                        "
                        >
                        {item.lunch}
                     </td>
                     <td
                        class="
                        text-center text-black
                        font-medium
                        text-base
                        py-5
                        px-2
                        bg-[#F3F6FF]
                        border-b border-[#E8E8E8]
                        "
                        >
                        {item.dinner}
                     </td>
                     <td
                        class="
                        text-center text-black
                        font-medium
                        text-base
                        py-5
                        px-2
                        bg-white
                        border-b border-r border-[#E8E8E8]
                        "
                        >
                        {item.total}
                  
                     </td>
                  </tr>
                
                 
               </tbody>
                ))}

                 
               </table>
            </div>
         </div>
      </div>
   </div>
</section>
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
