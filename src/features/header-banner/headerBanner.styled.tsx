import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Container } from "../../components/container";

export interface IHeaderBanner extends BoxProps {
  imageUrl: string;
}

export const HeaderBannerComponent: React.FC<IHeaderBanner> = (props) => {

  return (
      <Box
        as={motion.div}
        key={props.imageUrl}
        id='banner'
        h='100%'
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, duration: 2 }}
        exit={{ opacity: 0}}
        {...props}
      >
        <img src={props.imageUrl} alt='bannerImg' />
        {props.children}
      </Box>
  );
};

export const Mask: React.FC = () => {
  return (
    <Box
      id='mask'
      position='absolute'
      zIndex='50'
      h='100%'
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      boxShadow='inset 0px 0px 10px 10px #070707'
    >
    </Box>
  );
};

export const BannerContainer: React.FC<BoxProps> = (props) => {
  return (
    <Container
      id="banner-container"
      position='relative'
      padding='0'
      variant="small"
      height="30%"
      width='100%'
      maxW='100vw'
      overflow='hidden'
      {...props}
    />
  );
}