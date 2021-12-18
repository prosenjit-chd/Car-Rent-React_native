import { Center, StatusBar, View, Heading } from 'native-base';
import React from 'react';
import useAuth from '../hooks/useAuth';

const header = () => {
    const { user } = useAuth();
    return (
        <Center>
            <StatusBar backgroundColor="#38bdf8"
                barStyle="light-content" />
            <View bg="info.400" w="xl">
                <Heading textAlign="center" my="10" color="lightText">
                    {user.displayName}
                </Heading>
            </View>
        </Center>
    );
};

export default header;