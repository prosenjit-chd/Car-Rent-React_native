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





const Orders = () => {

    // Use useAuth here 
    const { user } = useAuth();
    // Use UseState here 
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/rents')
            .then(res => res.json())
            .then(data => filterMyEvent(data))
    }, [])

    // Filter user indivudiual data 
    const filterMyEvent = (data) => {
        setMyEvents(data.filter(event => event.userEmail === user.email))
    }

    const handleDeleteOrder = id => {
        fetch(`http://localhost:5000/rents/${id}`, {
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
                            <Button size="sm" w="16" onPress={() => handleDeleteOrder(item._id)}>
                                Cancel
                            </Button>
                        </HStack>
                    </Box>
                )}
                keyExtractor={(item) => item.id}
            />)

        </Box>
    );
};

export default Orders;