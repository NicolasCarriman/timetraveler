import { BoxProps } from "@chakra-ui/react";
import { Container } from "./container";

export interface CarrouselProps extends BoxProps {
  children: React.ReactNode;
}

export const CarrouselContainer: React.FC<CarrouselProps> = (props) => {
  return (
    <Container
      id="carrouselContainer"
      variant='small'
      {...props}
    >
      {props.children}
    </Container>
  );
}