import { Input } from "@chakra-ui/react";
import  React  from 'react';

export const InputField: React.FC<{
    type: string; 
    left: string; 
    top: string; 
    width: string
}> = ({type, left, top, width}) => {

    return (
        <Input
            type={type}
            isRequired
            textAlign='center'
            position='relative'
            top={top}
            left={left}
            px="2vw"
            backgroundColor={"rgba(255, 255, 255, 0.01)"}
            height="5vh"
            width={width}
            border="none"
            borderBottom= "1px solid gray"
            color= "white"
            _placeholder={{ color: "gray.100" }}
            placeholder="Input event name"
        />
    )
}