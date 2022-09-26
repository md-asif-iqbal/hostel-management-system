import React from 'react';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import FoodDetails from '../FoodDetails/FoodDetails';
import RoomHome from '../RoomHome/RoomHome';
import TravelExperience from '../TravelExperience/TravelExperience';

const Home = () => {
    return (
        <div>
            <Banner/>
            <RoomHome/>
            <TravelExperience/>
            <FoodDetails/>
            <FAQ/>
        </div>
    );
};

export default Home;