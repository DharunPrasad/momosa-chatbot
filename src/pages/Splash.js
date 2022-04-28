import momosaImage from "../assets/momosa-logo-image.jpg"
import hug from "../assets/hugging-face.png"
const Splash = ({caption}) => {
    return ( 
        <div className="flex flex-col justify-center items-center h-screen w-full border">
            <div className="h-fit w-full">
            <img src={momosaImage} alt="" className="w-4/12 mx-auto animate-spin" />
            <p className="text-lg font-semibold flex justify-center items-center mt-5 w-full"><span>{caption}</span><img src={hug} alt="hug" className="ml-3"/></p>
            </div>
        </div>
     );
}
 
export default Splash;