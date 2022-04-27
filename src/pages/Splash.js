import momosaImage from "../assets/momosa-logo-image.jpg"

const Splash = () => {
    return ( 
        <div className="flex justify-ceneter items-center h-full w-full animate-spin">
            <img src={momosaImage} alt="" className="w-4/12 mx-auto" />
        </div>
     );
}
 
export default Splash;