import { Parallax } from "@react-spring/parallax";

export default function Perspective(props){
    const config = {
        clamp: true, mass: 1, tension: 170, friction: 24, ...props.config
    }
    const pages = props.pages || 1
    const style = {backgroundColor: 'white', ...props.style}
    return <Parallax pages={pages} style={style} config={config}>
        {props.children}
    </Parallax>
}