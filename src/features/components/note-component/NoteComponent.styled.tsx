import { BoxProps, Container, Textarea } from "@chakra-ui/react";
import  React  from 'react';


export const InputContainer: React.FC<BoxProps> = (props) => {
  return(
    <Container
      display='flex'
      flexDirection='column'
      minH='50.5vh'
      minW='38.2vw'
      padding='3%'
      paddingTop='0'
      margin='0px'
      {...props}
    />
  );
}

export const ToolBarContainer: React.FC<BoxProps> = (props) => {
  return(
    <Container
      display='flex'
      flexDirection='column'
      minH='6vh'
      minW='36vw'
      padding='3%'
      margin='0px'
      background="blue"
      borderRadius='5px'
      {...props}
    />
  );
}

export const TextArea: React.FC<{
    left?: string; 
    top?: string; 
    width: string;
    placeholderText?: string;
    value?: string;
  }> = ({left, top, width, placeholderText, value}) => {

    return (
        <Textarea
            isRequired
            textAlign='center'
            position='relative'
            resize= 'none'
            top={top}
            left={left}
            px="2vw"
            backgroundColor={"rgba(255, 255, 255, 0.01)"}
            height="53vh"
            width={width}
            border="none"
            borderBottom= "1px solid gray"
            color= "white"
            _placeholder={{ color: "gray.600" }}
            placeholder={placeholderText}
        >
          {value}
        </Textarea>
    )
}
