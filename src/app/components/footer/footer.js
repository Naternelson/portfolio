import { Card } from "react-bootstrap"
export default function Footer(){
    return (
        <Card as="footer" className="text-center" bg="dark" text="light">
            <Card.Body>
                <Card.Title>Want to Contact Me?</Card.Title>
                <div className="divider"></div>
                <Card.Body>
                    <div>Phone: (801) 874-6451</div>
                    <div>Email: <a target="_blank" rel="noopener noreferrer" href="mailto: 7nater.nelson@gmail.com">7nater.nelson@gmail.com</a></div>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}