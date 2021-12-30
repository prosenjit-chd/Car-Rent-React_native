import { Center } from 'native-base';
import React from 'react';

const AddCar = () => {
    return (
        <Center
            bg="primary.400"
            _text={{
                color: "white",
                fontWeight: "bold",
            }}
            height={200}
            width={{
                base: 200,
                lg: 400,
            }}
        >
            Coming Soon Add Car
        </Center>
    );
};

export default AddCar;