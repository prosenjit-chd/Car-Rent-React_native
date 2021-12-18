import React from 'react';
import { Avatar, Button, Center, Text, View } from 'native-base';
import { useNavigate } from 'react-router-native';
import useAuth from '../hooks/useAuth';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const logincall = () => {
        navigate('/login');
    }
    const signUp = () => {
        navigate('/signup');
    }
    return (
        <Center flex={1}>
            {user.email ?
                <View>
                    <Avatar

                        source={{
                            uri: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
                        }}
                        size="2xl" ></Avatar>
                    <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="black"
                        fontSize={22}
                        bold
                        mb={3}
                        mt={3}
                    >
                        {user.displayName}
                    </Text>
                    <Button variant="outline" colorScheme="danger" onPress={logout}>
                        Log Out
                    </Button>
                </View>
                :
                <View>
                    <Button variant="outline" colorScheme="success" mt="10" onPress={() => logincall()}>
                        Log In
                    </Button>
                    <Button variant="outline" colorScheme="warning" mt="10" onPress={() => signUp()}>
                        Sign Up
                    </Button>
                </View>}
        </Center>
    );
};

export default Profile;