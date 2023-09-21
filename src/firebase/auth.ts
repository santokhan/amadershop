import { app } from './firebase'
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

export function authenticateByGoogle(callBack: (email: string) => void) {
    let google_provider = new GoogleAuthProvider();
    let auth = getAuth(app);
    signInWithPopup(auth, google_provider).then((res) => {
        const email = res.user.email
        if (email) {
            callBack(email)
        }
        console.log('google signIn response', res);
    }).catch((err) => {
        console.log('google signIn error', err);
    });
}