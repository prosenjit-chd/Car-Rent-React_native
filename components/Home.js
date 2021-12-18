import { Box, Container, Heading, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';


const Home = () => {
    // Use USe State here 
    const [car, setCar] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // Use USe State here 
    useEffect(() => {
        fetch('./cars.json')
            .then(res => res.json())
            .then(data => setTour(data.tours))
    }, []);
    return (
        <View>
            {/* {
                                    car.map(s => <Tour key={s.id} s={s} />)
                                } */}
        </View>
    );
};

export default Home;