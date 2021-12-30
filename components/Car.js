import { Center, Heading, HStack, Image, ScrollView, View, VStack, Text, Spacer, Button } from 'native-base';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';

const Car = (props) => {
    const { _id, title, Owner, location, price, type, img, details } = props.s;
    const navigate = useNavigate();

    const viewCarDetails = (id) => {
        navigate(`/details/${id}`);
    }
    return (
        <View shadow={4} padding={3} bg="coolGray.100">
            <HStack space={3} justifyContent="space-between" width="330">
                <Image
                    source={{
                        uri: `${img}`,
                    }}
                    alt="Alternate Text"
                    size="xl"
                />
                <VStack>
                    <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        fontSize={19}
                        bold
                    >
                        {title}
                    </Text>
                    <Text
                        color="coolGray.600"
                        _dark={{
                            color: "warmGray.200",
                        }}
                    >
                        {`Owner: ${Owner}`}
                    </Text>
                    <Text
                        color="coolGray.600"
                        _dark={{
                            color: "warmGray.200",
                        }}
                    >
                        {`Location: ${location}`}
                    </Text>
                    <Text
                        color="coolGray.600"
                        fontSize={14}
                        bold
                        _dark={{
                            color: "warmGray.200",
                        }}
                    >
                        {`Price: ${price} BDT/PH`}
                    </Text>
                    <Button size="xs" w="16" onPress={() => viewCarDetails(_id)}>
                        Details
                    </Button>
                </VStack>
                <Spacer />
            </HStack>
        </View>
    );
};

export default Car;