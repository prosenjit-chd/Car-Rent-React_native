import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import Home from "./components/Home";
import Car from "./components/Car";
import Cars from "./components/Cars";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NativeRouter, Route, Routes } from "react-router-native";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import CarDetails from "./components/CarDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import AllOrders from "./components/AllOrders";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
          safeArea
        >
          <NativeRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Cars />} />
              <Route path="/home" element={<Cars />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/order" element={<Orders />} />
              <Route path="/allorders" element={<AllOrders />} />
              <Route path="/details/:id" element={<PrivateRoute><CarDetails /></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
          </NativeRouter>
        </Center>
      </AuthProvider>
    </NativeBaseProvider>
  );
}


