import { useState, useEffect } from "react"
import {ref, getDownloadURL, getStorage} from "firebase/storage"
import { Card, Row, Col, Container, Image } from "react-bootstrap"
import MainForm from "../form/main-form"


export default function AboutMe(){
    const [url, setUrl] = useState()
    const storage = getStorage()
    const imageRef = ref(storage, 'public/images/profile/github-profile.jpg')
    useEffect(()=>{
        getDownloadURL(imageRef).then(url => setUrl(url))
    },[])

    return (

                <div className="border-0 my-3">
                    <Container >
                        <Row>
                            <Col className="d-flex align-items-center" sm="12" md="4">
                                <Image className="my-auto img-fluid"  rounded src={url}/>
                            </Col>
                            <Col md="8">
                                <Card.Body>
                                    <Card.Title>Hi! My Name is Nate!</Card.Title>
                                    <Card.Text>
                                        I am excited about my work as a full-stack engineer and pride myself on my ability to collaborate, education, innovate and grow. Employers and coworkers have all said that I am an excellent team member, innovative, and driven. I’m not afraid to voice my opinion, even to those above my paygrade, and believe in kindness and good humor for all.
                                    </Card.Text>
                                    <Card.Text>
                                       A Graduate of <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer">Flatiron's</a> program for Software Engineering, and with the number of projects I've been able to work on, along with the students I've been able to tutor, since, I feel very confident that I can provide the very best in web development.
                                    </Card.Text>
                                </Card.Body>
                                <MainForm />
                            </Col>
                        </Row>
                    </Container>
                </div>
        
    );
}