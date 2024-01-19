import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase  from "firebase/compat/app";
import { auth } from "../firebase";

function Login() {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2 className="text-2xl font-semibold">
                    Welcome To <span className="bg-blue-400 text-white px-3 py-1 rounded-2xl">Pigeon Chat</span>
                </h2>
                <div className="flex flex-col justify-center gap-3 mx-5 mt-10 ">
                    <div 
                        className="login-button google" 
                        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                        <GoogleOutlined /> Sign In with Google
                    </div>
                    <div 
                        className="login-button facebook" 
                        onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                    >
                        <FacebookOutlined /> Sign In with Google
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
