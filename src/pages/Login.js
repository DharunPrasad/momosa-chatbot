import { Link } from "react-router-dom";
import momosaImage from "../assets/momosa-logo-image.jpg"
const Login  = () => {
    return ( 
        <div className="h-screen w-full relative">
            <div className="centrify w-full">
            <h1 className="text-3xl text-center mb-10">Momosa Chatbot</h1>
            <img src={momosaImage} alt="" className="w-4/12 mx-auto mb-5" />
            <p className="text-gray-400 text-center mb-5">Few taps for instant info!</p>
            <Link to = "/chatbot" className="bg-primary px-3 mb-5 py-2 rounded-md text-white mx-auto block w-6/12 text-center"> Get Started</Link>
            </div>

        </div>
      );
}
 
export default Login;