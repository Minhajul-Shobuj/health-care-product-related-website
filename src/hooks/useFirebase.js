import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import authentication from "../Firebase/firebase.initialize";

authentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isloading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setError('');
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
    };

    const takeName = (e) => {
        setName(e.target.value);
    };
    const takeEmail = (e) => {
        setEmail(e.target.value);
    };
    const takePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('a password must be six characters including one uppercase letter,one lowercase letter and one number');
            return;
        };
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('');
                setUser(result.user);
                setName();
                updateName();
                console.log(result.user)
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            setUser(result.user);
        }).catch((error) => {
            setError(error.message)
        });
    }

    const resetPassword = () => {
        const auth = getAuth()
        sendPasswordResetEmail(auth, email)
            .then(() => {
            })
            .catch((error) => {
                setError(error.message)
            });

    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setError(error);
            }).finally(() => {
                setIsLoading(false);
            });
    }
    useEffect(() => {
        const unsubsCribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return unsubsCribed;
    }, [])
    return {
        googleLogIn, logOut, user, name, error, takeName, takeEmail, takePassword, handleRegistration, resetPassword
    }
};

export default useFirebase;