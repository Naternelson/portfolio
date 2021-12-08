import { useState, useEffect } from "react"
import {ref, getDownloadURL, getStorage} from "firebase/storage"
import { Card, Row, Col, Container, Image } from "react-bootstrap"
import MainForm from "../form/main-form"
import "./about-me.css"


export default function AboutMe(){
    const [url, setUrl] = useState("/avatar-default.jpg")
  
    
    useEffect(()=>{
        const storage = getStorage()
        const imageRef = ref(storage, 'public/images/profile/popout-profile (800 x 800 px).png')
        setTimeout(()=> getDownloadURL(imageRef).then(url => setUrl(url)),300)
    },[])

    return (

                <div className="border-0 mb-3" id="about-me">
                    <Container >
                        <Row>
                            <Col className="d-flex align-items-center" sm="12" md="4">
                                <Image className="my-auto img-fluid"  rounded src={url}/>
                            </Col>
                            <Col md="8" className="d-flex align-items-center">
                                <div className="bg-screen">
                                    <h3>Hi! My Name is Nate!</h3>
                                    <p>
                                        I am excited about my work as a full-stack engineer and pride myself on my ability to collaborate, education, innovate and grow. Employers and coworkers have all said that I am an excellent team member, innovative, and driven. I’m not afraid to voice my opinion, even to those above my paygrade, and believe in kindness and good humor for all.
                                    </p>
                                    <p>
                                       A Graduate of <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer">Flatiron's</a> program for Software Engineering, and with the number of projects I've been able to work on, along with the students I've been able to tutor, since, I feel very confident that I can provide the very best in web development.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        
    );
}