import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description,setdescription]=useState("");
    const [cid ,setcid]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const description =async()=>{
       const data = await contract.methods.description().call();
       setdescription(data);
        }
        contract && description();
    },[state]);
    useEffect(()=>{
        const {contract}=state;
        const cidofimage =async()=>{
       const cid = await contract.methods.imageLink().call();
       setcid(cid);
        }
        contract && cidofimage();
    },[state])

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Sattvik Dwivedi</span>
                <br/>
                     A Full-Stack Blockchain Developer From India.</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3> {description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - Dwivedisattvik2121@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://gateway.pinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
