import { ParallaxLayer } from '@react-spring/parallax'


export default function PerspectiveLayer(props){
    let speed = props.speed
    const params = {
        maxBlur:  5,
        minBlur: 0,
        maxDimness: 0,
        minDimness: 100,
        maxGray: 90,
        minGray: 100,
        maxSpeed: 10,
        minSpeed: 0,
        minOpacity: 100,
        maxOpacity: 50,
        ...props.params
    }
    speed = speed >= params.minSpeed && speed <= params.maxSpeed ? speed : speed > params.maxSpeed ? params.maxSpeed : params.minSpeed
    const percent = (speed - params.minSpeed) / (params.maxSpeed - params.minSpeed)
    const calcPercent = (min, max, percent) => {
        return (percent * (max - min)) + min 
    }
    const options = {
        blur: `blur(${calcPercent(params.minBlur, params.maxBlur, percent)}px)`,
        dim: `brightness(${calcPercent(params.minDimness, params.maxDimness, percent)}%)`,
        gray: `grayscale(${calcPercent(params.minGray, params.maxGray, percent)}%)`,
        opacity: `opacity(${!!props.transparency ? calcPercent(params.minOpacity, params.maxOpacity, percent) : 100}%)`
    } 
    return <ParallaxLayer {...props} speed={speed} style={{...props.style, zIndex: speed, filter: Object.values(options).join(" ")}}>
        {props.children}
    </ParallaxLayer>
}