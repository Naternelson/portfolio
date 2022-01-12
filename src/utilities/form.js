import { Box } from "@mui/material";

export default function Form(props){
    const options = {
        ...props,
        noValidate: props.noValidate === undefined ? true : props.noValidate,
        onSubmit: props.onSubmit ? props.onSubmit : ((e) => {
            e.preventDefault()
            if(props.log) console.log("Form Submitted", {form: e.target})
        }),
        component: "form"
    }

    return (
        <Box {...options}>
            {props.children}
        </Box>
    )
}