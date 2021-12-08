import { Form, InputGroup, FormControl, Button} from "react-bootstrap";

export default function MainForm(){
    return (
        <Form className="border" id="main-form">
            <h2 className="m-3">Interested?</h2>
            <p className="m-3">Want more information? Let me know below :)</p>
            <Form.Group className="m-3">
                <InputGroup >
                    <InputGroup.Text>Company</InputGroup.Text>
                    <FormControl aria-label="Company"/>
                </InputGroup>
            </Form.Group>
            <Form.Group className="m-3">
                <InputGroup >
                    <InputGroup.Text>Your Name</InputGroup.Text>
                    <FormControl aria-label="Name"/>
                </InputGroup>
            </Form.Group>
            <Form.Group className="m-3">
                <InputGroup >
                    <InputGroup.Text>Email</InputGroup.Text>
                    <FormControl aria-label="Email"/>
                </InputGroup>
            </Form.Group>
            <Form.Group className="m-3">
                <InputGroup >
                    <InputGroup.Text>Tell me about what you need</InputGroup.Text>
                    <FormControl as="textarea" rows={4} aria-label="Email"/>
                </InputGroup>
            </Form.Group>
            
            <Form.Group  className="m-3 d-grid">
                <Button variant="secondary" type="submit">Sumbit</Button>
            </Form.Group>
        </Form>
    )
}