import React from 'react';
import { HStack, Stack, Center, Heading, Icon, IconButton } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigate } from 'react-router-native';
import useAuth from '../hooks/useAuth';

const Footer = () => {
    const { admin } = useAuth();
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    }

    const handleOrder = () => {
        navigate('/order');
    }

    const handleProfile = () => {
        navigate('/profile');
    }
    const handleAllOrder = () => {
        navigate('/allorders');
    }
    return (
        <Stack space={3} alignItems="center" w="100%" shadow={3} bg="trueGray.200">
            <HStack space={12} alignItems="center" h="20">
                <IconButton
                    variant="outline"
                    onPress={handleHome}
                    // h="20" w="20" rounded="md"
                    borderWidth={0}
                    rounded="md"
                    icon={<Icon size="md" as={<Ionicons name="home-outline" />} color="white" />}
                />
                <IconButton
                    variant="outline"
                    onPress={handleOrder}
                    borderWidth={0}
                    rounded="md"
                    icon={<Icon size="md" as={<Ionicons name="file-tray-stacked-outline" />} color="white" />}
                />
                <IconButton
                    variant="outline"
                    onPress={handleProfile}
                    borderWidth={0}
                    rounded="md"
                    icon={<Icon size="md" as={<Ionicons name="person-outline" />} color="white" />}
                />
                {
                    admin && <IconButton
                        variant="outline"
                        onPress={handleAllOrder}
                        borderWidth={0}
                        rounded="md"
                        icon={<Icon size="md" as={<Ionicons name="checkmark-circle-outline" />} color="white" />}

                    />
                }
            </HStack>
        </Stack>
    );
};

export default Footer;