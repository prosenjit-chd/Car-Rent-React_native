import React, { useEffect, useState } from 'react';
import {
    Box,
    FlatList,
    Heading,
    Avatar,
    HStack,
    VStack,
    Text,
    Spacer,
    Center,
    NativeBaseProvider,
    Button,
} from "native-base"
import useAuth from '../hooks/useAuth';





const AllOrders = () => {

    // Use useAuth here 
    const { user } = useAuth();
    // Use UseState here 
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        fetch('https://car-rent-pc.herokuapp.com/rents')
            .then(res => res.json())
            .then(data => setMyEvents(data))
    }, [])



    const handleDeleteOrder = id => {
        fetch(`https://car-rent-pc.herokuapp.com/rents/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingOrders = myEvents.filter(order => order._id !== id);
                    setMyEvents(remainingOrders);
                }
            })
            .catch(err => console.log(err))
    }

    const handleAddOrder = id => {
        const findOrder = myEvents.find(event => event._id === id)
        findOrder.status = !findOrder.status;
        fetch(`https://car-rent-pc.herokuapp.com/rents/${id}`, {
            method: 'PUT', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify(findOrder) // We send data in JSON format
        })
            .then(res => res.json())
            .then(data => { })
            .catch(err => console.log(err))
    }


    return (
        <Box
            w={{
                base: "100%",
                md: "25%",
            }}
            flex={1}
        >
            <Heading fontSize="xl" p="4" pb="3">
                My Orders
            </Heading>
            <FlatList
                data={myEvents}
                renderItem={({ item }) => (
                    <Box
                        borderBottomWidth="1"
                        _dark={{
                            borderColor: "gray.600",
                        }}
                        borderColor="coolGray.200"
                        pl="4"
                        pr="5"
                        py="2"
                    >
                        <HStack space={3} justifyContent="space-between">
                            <Avatar
                                size="48px"
                                source={{
                                    uri: `${item.carImg
                                        }`,
                                }}
                            />
                            <VStack>
                                <Text
                                    _dark={{
                                        color: "warmGray.50",
                                    }}
                                    color="coolGray.800"
                                    bold
                                >
                                    {item.carName}
                                </Text>
                                <Text
                                    color="coolGray.600"
                                    _dark={{
                                        color: "warmGray.200",
                                    }}
                                >
                                    {item.carPrice}
                                </Text>
                                <Text
                                    color="coolGray.600"
                                    _dark={{
                                        color: "warmGray.200",
                                    }}
                                >
                                    Status: {!item.status ? "Pending" : "Apporved"}
                                </Text>
                            </VStack>
                            <Spacer />
                            <Button size="sm" w="12" h="8" colorScheme="red" onPress={() => handleDeleteOrder(item._id)}>
                                Cancel
                            </Button>
                            <Button size="sm" w="12" h="8" colorScheme="success" onPress={() => handleAddOrder(item._id)}>
                                Add
                            </Button>
                        </HStack>
                    </Box>
                )}
                keyExtractor={(item) => item.id}
            />)

        </Box>
    );
};

export default AllOrders;