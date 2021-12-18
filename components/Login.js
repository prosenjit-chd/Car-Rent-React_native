import React, { useState } from 'react';
import { Input, Stack, FormControl, Center, Button, Heading, HStack, VStack, Text } from 'native-base';
import { Link, useLocation, useNavigate } from 'react-router-native';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { loginUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        loginUser(email, password, location, navigate);
    }

    return (
        <Center flex={1} w="full">
            <FormControl w="full">
                <Stack space={5}>
                    <Heading color="primary.700">Welcome Sir, Sign In</Heading>
                    <Stack>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
                    </Stack>
                    <Stack>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Password" secureTextEntry value={password} onChangeText={text => setPassword(text)} />
                    </Stack>
                </Stack>
                <Stack space={3} alignItems="center">
                    <VStack space={3} alignItems="center" mt="4">
                        <Button size="lg" onPress={handleSignIn}>
                            Log In
                        </Button>
                        <Link to="/signup" mt="3">
                            <Text>Create Account</Text>
                        </Link>
                    </VStack>
                </Stack>

            </FormControl>
        </Center>
    );
};

export default Login;