import firebase from "firebase";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    firebase.initializeApp(firebaseConfig);
}

export default initializeAuthentication;