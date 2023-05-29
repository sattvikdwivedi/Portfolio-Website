import React, { useEffect,useState} from 'react'
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import img from "../../assets/img1.png"
import "./Projects.css"

const Projects = ({state}) => {
    const [modal, setModal] = useState(false);
    const [projects,setprojects]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const projectsdetails= async()=>{
        const data = await contract.methods.allProjects().call();
        //  console.log(data);
        setprojects(data);
        }
        projectsdetails() && contract;
    },
[state]
    );
    const donateEth=async(event)=>{
        event.preventDefault();
        try{
            const{contract,web3}=state;
            const eth=document.querySelector("#eth").value;
            const weivalue=web3.utils.toWei(eth,"ether");
            const account= await web3.eth.getAccounts();
            const transaction =await contract.methods.donate().send({from:account[0],value:weivalue,gas:480000});
            alert("Transaction Successful");
        }
        catch(error){
               alert("Transaction Unsuccessful");
        }
    }
    return (
        <section className="project-section">
        <h1 className='title'>Projects</h1>
            <div className="card-wrapper">
                 {projects!=="" &&  projects.map((project)=>{
                    const githublink=`https://github.com/sattvikdwivedi/${project.githubLink}`;
                    return ( <a href= {githublink} className="project-card" target='_blank' rel="noopener noreferrer" >
                    <div className="card-img">
                        <img src={`https://gateway.pinata.cloud/ipfs/${project.image}`} alt="" /></div>
                    <div className="card-text">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                </a>)
                })} 
           
            </div>
 {/*  =========popup bootstrap==========  */}

 <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the ETH you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={donateEth} >
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    <p className='donate' onClick={() => setModal(true)}>Liked the dummyValue's ? Consider donating Eth's <FaDonate className='icon' /></p>
        </section>
    )
}

export default Projects
