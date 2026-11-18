import { useState } from "react";

function ContactForm(){
    const [data,setData] = useState({
        fullName: "",
        email: "",
        message: ""
    })
    const handleChange = (e) => {
        const [value , name] = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const [error, setError] = useState({})
    const handlSubmit = (e)=> {
        e.preventDefailt()
        const newErrors = {};
        if(!data.email.trim()){
            newErrors.email = "Email error"
        }
        if(Object.keys(newErrors).length>0){
            return;
        }
        console.log(data);
        
    }
    return(
        <form
        onSubmit={handlSubmit} 
        className="flex flex-col gap -5 w-[200px] mx-auto" name="fullName">
            <input 
            className="border-1" type="text" 
            placeholder="Full name" 
            name="email" 
            onChange={handleChange}
            />
            {error.email && (
                <p className="tetxt-red-600 mt-2">
                    {error.email}
                </p>
            )}
            <input className="border-1" type="email" placeholder="Email" name="message"
            onChange={handleChange}/>
            <textarea placeholder="Write message"
            onChange={handleChange}
            ></textarea>
            <button type="submit" >Submit</button>
        </form>
    )
}

export default ContactForm;