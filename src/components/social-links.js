import { Link } from "@mui/material";


export default function SocialLink(props){
    const transition = "color 0.1s ease"
    return <Link 
        rel="noreferrer noopener" 
        target="_blank" 
        underline={"none"} 
        color={"inherit"} 
        variant={"inherit"} 
        mx={2}
        sx={{
            transition, 
            "&:hover": {
                color: "secondary.main",
                transition
            }}}
        {...props}
        >
        {props.children}
    </Link>
}