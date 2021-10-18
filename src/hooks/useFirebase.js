import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import authentication from "../Firebase/firebase.initialize";

authentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error);
            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setError(error);
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

    }, [])
    return {
        googleLogIn, logOut, user, error
    }
};

export default useFirebase;