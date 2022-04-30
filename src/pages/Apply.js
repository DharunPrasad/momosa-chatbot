import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Apply = () => {
    const {id} = useParams()
    const schemes = useSelector(state => state.schemeReducer.schemes);
    const filteredArray = schemes.filter(scheme => scheme._id.$oid === id);
    console.log(filteredArray)
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [religion, setReligion] = useState("")
    const [caste, setCaste] = useState("")
    const [marital, setMarital] = useState("")
    const [education, setEducation] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
    const [bloodGroup, setBloodGroup] = useState("")
    const [phone, setPhone] = useState("")
    const [occupation, setOccupation] = useState("")
    const [aadhar, setAdhar] = useState("")
    const [pancard, setPancard] = useState("")

const object = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    dateofbirth: dob,
    gender: gender,
    fathername: fatherName,
    religion: religion,
    caste: caste,
    marital_status: marital,
    educational_qualification: education,
    address: address,
    pincode: pincode,
    blood_group: bloodGroup,
    phone: phone,
    occupation: occupation,
    aadhaar: aadhar,
    pancard: pancard,
    scheme: id

}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(object)

    fetch("https://momosa-api.herokuapp.com/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(object),
    }).then(res => res.json()).then(data => {
      console.log(data)
    })

}


    
    return ( 

    
    

       
        <div className="min-h-screen font-semibold p-3">
<h2 className="text-xl">Enter Details</h2>
            <form action="" className="w-11/12 mx-auto mt-5" onSubmit={handleSubmit}>
                <input type="text" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value = {firstName} required/>

                <input type="text" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value = {lastName}  required/>

                <input type="email" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)} value = {email}  required/>

                <input type="date" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" required onChange={(e) => setDob(e.target.value)} />

                <select name=""  className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" id="" onChange={(e) => setGender(e.target.value)}>
                    <option>Select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="thirdgender">Third Gender</option>
                    <option value="other">Other</option>

                </select>
                <input type="text" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Father Name" onChange={(e) => setFatherName(e.target.value)} value = {fatherName}  required/>
                
                <select name=""  className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" id="" onChange={(e) => setReligion(e.target.value)}>
                <option>Select Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Christian">Christian</option>
                    <option value="Muslim">Muslim</option>
                    <option value="other">Other</option>

                </select>
                

                <select name=""  className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" id="" onChange={(e) => setCaste(e.target.value)}>
                <option>Select Caste</option>
                    <option value="OC/FC">OC/FC</option>
                    <option value="BC">BC</option>
                    <option value="OBC">MBC</option>
                    <option value="OBC">OBC</option>
                    <option value="DNC">DNC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                </select>

                <select name=""  className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" id="" onChange={(e) => setMarital(e.target.value)}>
                <option>Select Marital Status</option>

                    <option value="Single">Single</option>
                    <option value="Soon to be Married">Soon to be Married</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Destitute">Destitute</option>
                    <option value="Windowed">Windowed</option>
                    <option value="Destered">Deserted</option>
                </select>

                <select name=""  className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" id="" onChange={(e) => setEducation(e.target.value)}>
                <option>Select Occupation</option>
                    <option value="Doctorate or Higher">Doctorate or Higher</option>
                    <option value="Protgraduate">Postgraduate</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Vocational Qualification">Vocatinal Qualification</option>
                    <option value="Higher Secondary">Higher Secondary</option>
                    <option value="Secondary School">Secondary School</option>
                    <option value="Middle School">Middle School</option>
                    <option value="Primary School">Primary School</option>
                </select>

                
                <input type="text" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Address" onChange={(e) => setAddress(e.target.value)} required/>
                
                <input type="text" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Occupation" onChange={(e) => setOccupation(e.target.value)}  required/>

                <input type="number" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Pin Code" onChange={(e) => setPincode(e.target.value)}  required/>

                <input type="number" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}  required/>

                <input type="text" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Blood Group" onChange={(e) => setBloodGroup(e.target.value)}  required/>

                <input type="number" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Adhar Number" onChange={(e) => setAdhar(e.target.value)}  required/>

                <input type="number" className="bg-chatbg rounded-md p-3 w-full my-2 outline-none" placeholder="Pan Card" onChange={(e) => setPancard(e.target.value)}  required/>
            <button className="" >Submit</button>
            </form>

        </div>
     );
}
 
export default Apply;