
import { useEffect } from "react";
import { googleProvider, auth } from "../firebase";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
export default function GoogleLoginButton() {
    function handleGoogleLogin() {
        signInWithRedirect(auth, googleProvider);
    }
    async function handleRedirectResults() {
        const result = await getRedirectResult(auth)
        console.log("Google result:", result);
    }
    useEffect(() => {
        handleRedirectResults
    }, [])
    return (
        <>
            <button onClick={handleGoogleLogin}>Continue with Google</button>
        </>
    )
}
