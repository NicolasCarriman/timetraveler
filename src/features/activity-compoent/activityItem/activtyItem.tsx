import { Box, BoxProps } from "@chakra-ui/react";

interface Idestiny extends BoxProps {
  children?: React.ReactNode;
  selected: boolean,
  id: string,
  onHandleClick: any
}

export const ActivtyItem: React.FC<Idestiny> = (props) => {

  const { id, onHandleClick } = props
  
  const handleClick = () => {
    onHandleClick();
  }
  
  return (
    <Box
    //@ts-ignore
    onClick={() => handleClick()}
    as='ul'
    cursor={props.selected? 'text' : 'pointer'}
    color={props.selected? 'white' : 'gray.400'}
  >
    {props.children}
  </Box>
  );
};
