import { Center, Heading, HStack, Image, ScrollView, Spinner, Stack, Text, View, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import Car from './Car';

const Cars = () => {
    // Use USe State here 
    const [car, setCar] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    // Use Use Effect here 
    useEffect(() => {
        fetch('https://car-rent-pc.herokuapp.com/carscollection')
            .then(res => res.json())
            .then(data => setCar(data.tours))
            .then(() => setLoading(false))
    }, []);
    return (
        <ScrollView
            _contentContainerStyle={{
                px: "20px",
                mb: "4",
                minW: "72",
            }}>
            <VStack space={4} alignItems="center">
                <Stack space={3} alignItems="center" mt="4">
                    <HStack space={3} alignItems="center">
                        <Center h="8" w="20" bg="info.200" rounded="xl" shadow={3}>
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                {"Dhaka"}
                            </Text>
                        </Center>
                        <Center h="8" w="24" bg="info.200" rounded="xl" shadow={3}>
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                {"Chittagong"}
                            </Text>
                        </Center>
                        <Center h="8" w="20" bg="info.200" rounded="xl" shadow={3}>
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                {"Khulna"}
                            </Text>
                        </Center>

                    </HStack>
                </Stack>

                {!loading ?
                    <View>
                        {
                            car.map(s => <Car key={s.id} s={s} />)
                        }
                    </View>

                    :

                    <HStack space={2} alignItems="center">
                        <Spinner accessibilityLabel="Loading posts" />
                        <Heading color="primary.500" fontSize="md">
                            Loading
                        </Heading>
                    </HStack>}


            </VStack>
        </ScrollView>
    );
};

export default Cars;