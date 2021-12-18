import React, { useState } from 'react';
import { Input, Stack, FormControl, Center, Button, Heading, HStack, VStack, Text } from 'native-base';
import { Link, useLocation, useNavigate } from 'react-router-native';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
    const { registerUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        registerUser(email, password, fullname, navigate);
    }

    return (
        <Center flex={1} w="full">
            <FormControl w="full">
                <Stack space={5}>
                    <Heading color="primary.700">Create Account</Heading>
                    <Stack>
                        <FormControl.Label>Full Name</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="FullName" value={fullname} onChangeText={text => setFullname(text)} />
                    </Stack>
                    <Stack>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
                    </Stack>
                    <Stack>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Password" secureTextEntry value={password} onChangeText={text => setPassword(text)} />
                    </Stack>
                </Stack>
                <VStack space={3} alignItems="center" mt="4">
                    <Button size="lg" onPress={handleSignUp}>
                        Create Account
                    </Button>
                    <Link to="/login" mt="3">
                        <Text>Already have account! Sign In</Text>
                    </Link>
                </VStack >
            </FormControl>
        </Center>
    );
};

export default SignUp;