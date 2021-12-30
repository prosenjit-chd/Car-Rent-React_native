import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    NativeBaseProvider,
    Button,
    Modal,
    FormControl,
    Input,
    ScrollView,
    Spinner,
    View,
} from "native-base"
import useAuth from '../hooks/useAuth';

const CarDetails = () => {
    const [showModal, setShowModal] = useState(false);
    // Use UseParam here 
    const { id } = useParams();
    const { user } = useAuth();
    // Use USe State here 
    const [car, setCar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    // Use Use Effect here 
    useEffect(() => {
        fetch(`https://car-rent-pc.herokuapp.com/carscollection/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
            .then(() => setLoading(false))
    }, []);

    const handleRentCarInfo = () => {
        const bodyData = {
            userName: user.displayName,
            userEmail: user.email,
            carName: car.title,
            carImg: car.img,
            carPrice: car.price,
            carDate: date,
            carAddress: address,
            status: false
        }
        fetch('https://car-rent-pc.herokuapp.com/rents', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        }).then(res => res.json())
            .then(res => setShowModal(false));

    }

    return (
        <ScrollView>
            <Center flex={1} mt="4">
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Contact Us</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Date</FormControl.Label>
                                <Input value={date} onChangeText={text => setDate(text)} />
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Address</FormControl.Label>
                                <Input value={address} onChangeText={text => setAddress(text)} />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button
                                    variant="ghost"
                                    colorScheme="blueGray"
                                    onPress={() => {
                                        setShowModal(false)
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onPress={handleRentCarInfo}
                                >
                                    Save
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>


                <Box
                    maxW="80"
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700",
                    }}
                    _web={{
                        shadow: 2,
                        borderWidth: 0,
                    }}
                    _light={{
                        backgroundColor: "gray.50",
                    }}
                >

                    {!loading ? <View>
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                <Image
                                    source={{
                                        uri: `${car.img}`,
                                    }}
                                    alt="image"
                                />
                            </AspectRatio>

                        </Box>
                        <Stack p="4" space={3} >
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    {car.title}
                                </Heading>
                                <Text
                                    fontSize="xs"
                                    _light={{
                                        color: "violet.500",
                                    }}
                                    _dark={{
                                        color: "violet.400",
                                    }}
                                    fontWeight="500"
                                    ml="-0.5"
                                    mt="-1"
                                >
                                    {car.name}
                                </Text>
                                <Text
                                    color="coolGray.600"
                                    fontSize={12}
                                    bold
                                    _dark={{
                                        color: "warmGray.200",
                                    }}
                                >
                                    {`Location: ${car.location}`}
                                </Text>
                            </Stack>
                            <Text fontWeight="400">
                                {car.deatails.slice(0, 140)}
                            </Text>
                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <HStack alignItems="center">
                                    <Text
                                        color="coolGray.600"
                                        fontSize={14}
                                        bold
                                        _dark={{
                                            color: "warmGray.200",
                                        }}
                                    >
                                        {`Price: ${car.price} BDT/PH`}
                                    </Text>
                                </HStack>
                            </HStack>
                            <Button size="xs" w="16" colorScheme="cyan" onPress={() => setShowModal(true)}>
                                Book Now
                            </Button>
                        </Stack>
                    </View>
                        :
                        <HStack space={2} alignItems="center">
                            <Spinner accessibilityLabel="Loading posts" />
                            <Heading color="primary.500" fontSize="md">
                                Loading
                            </Heading>
                        </HStack>}

                </Box>
            </Center>
        </ScrollView>
    );
};

export default CarDetails;