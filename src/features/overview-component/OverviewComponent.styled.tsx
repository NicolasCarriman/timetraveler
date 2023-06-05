import { BoxProps, Container, Textarea } from "@chakra-ui/react";
import React from 'react';

export const TextAreaContainer: React.FC<BoxProps> = (props) => {
  return (
    <Container
      id='text-area'
      position='relative'
      display='flex'
      justifyContent='center'
      align-items='center'
      minH='46.5vh'
      width='100%'
      padding='3%'
      maxWidth='100vw'
      margin='0px'
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
}> = ({ left, top, width, placeholderText, value }) => {

  return (
    <Textarea
      isRequired
      textAlign='center'
      position='relative'
      resize='none'
      top={top}
      left={left}
      px="2vw"
      backgroundColor={"rgba(255, 255, 255, 0.01)"}
      height="calc(38vh)"
      value={value}
      width={width}
      border="none"
      borderBottom="1px solid gray"
      color="white"
      _placeholder={{ color: "gray.600" }}
      placeholder={placeholderText}
    />
  )
}
