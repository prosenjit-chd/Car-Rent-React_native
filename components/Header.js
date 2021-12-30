import { Center, StatusBar, View, Heading } from 'native-base';
import React from 'react';


const header = () => {

    return (
        <Center>
            <StatusBar backgroundColor="#38bdf8"
                barStyle="light-content" />
            <View bg="info.400" w="xl">
                <Heading textAlign="center" my="10" color="lightText">
                    {"Nearby Car Rent Service"}
                </Heading>
            </View>
        </Center>
    );
};

export default header;