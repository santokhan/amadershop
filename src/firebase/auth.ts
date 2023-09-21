import { app } from './firebase'
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

export function authenticateByGoogle(callBack: (email: string) => void) {
    let auth = getAuth(app);
    let google_provider = new GoogleAuthProvider();
    signInWithPopup(auth, google_provider).then((res) => {
        const email = res.user.email
        if (email) {
            callBack(email)
        }
    }).catch((err) => {
        console.log('google signIn error', err);
    });
}

export async function logOut(callBack: () => void) {
    const auth = getAuth();
    await auth.signOut().then(() => {
        callBack()
    })
}
