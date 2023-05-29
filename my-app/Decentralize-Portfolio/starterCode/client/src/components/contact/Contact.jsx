import './Contact.css'
import { useEffect, useState } from "react"
const Contact = ({state}) => {
 
    const [resume,setresume]=useState("");
    useEffect(()=>{
    const{contract}=state;

    const fetchdata=async()=>{
        
        const data= await contract.methods.resumeLink().call();
         setresume("https://gateway.pinata.cloud/ipfs/"+data);
    }
    contract && fetchdata();

},[state]);
    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    View Resume
                </button>
            </a>

        </section>
    )
}

export default Contact
