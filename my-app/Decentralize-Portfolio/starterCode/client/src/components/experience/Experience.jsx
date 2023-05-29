import { SlCalender } from "react-icons/sl"
import './Experience.css'
import { useEffect, useState } from "react"


const Experience = ({state}) => {
    const [education,seteducation]=useState("");
    const [experience,setexperience]=useState("");
    useEffect(()=>{
    const{contract}=state;

    const fetchdata=async()=>{
        
        const data= await contract.methods.allEductationDetails().call();
        seteducation(data);
    }
    contract && fetchdata();

},[state]);
   useEffect(()=>{
    const{contract}=state;

    const fetchdata=async()=>{
        
        const data= await contract.methods.allExperienceDetails().call();
        console.log(data);
        setexperience(data);
    }
    contract && fetchdata();

},[state]);

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {  education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">
                    {edu.instutionName}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    {  experience!=="" && experience.map((exp)=>{
                        return (   
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 
                            { exp.date }
                        </p>
                        <h3 className="card-text2">
                        { exp.post }
                        </h3>
                        <p className="card-text3">D{exp.knowledgeAcquired}</p>
                        <p className="card-text4">
                            {exp.compamyName} 
                        </p>
                    
                    </div>)
                  })}
                    
                </div>
            </div>
        </section>
    )
}

export default Experience
