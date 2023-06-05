import { Box } from "@chakra-ui/react";
import { Container } from "./container";
import { motion } from "framer-motion";

interface BoxImageProps {
  imgUrl?: string
  children: React.ReactNode
}
export const BoxImage: React.FC<BoxImageProps> = (props) => {
  return (
    <Container
      margin='0'
      variant="small"
      height='calc(80vh)'
    >
      <Box
        borderRadius='14px'
        height='100%'
        id='boxImage'
        display='flex'
        justifyContent='center'
      >
        {
          props.imgUrl ?
          <Box
            as={motion.img}
            key={props.imgUrl}
            src={props.imgUrl}
            alt='bannerImg'
            objectFit='cover'
            height='100%'
            width='100%'
            borderRadius='12px'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 0.2}  }}
            exit={{ opacity: 0}}
          /> : null
        }
        {props.children}
      </Box>
    </Container>
  );
}