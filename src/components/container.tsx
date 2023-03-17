import { Box, BoxProps } from "@chakra-ui/react";

export interface ContainerProps extends BoxProps {
  variant?: "small" | "medium" | "large";
}

export const Container: React.FC<ContainerProps> = ({variant = "medium", ...props }) => {

  let width: string;
  switch (variant) {
    case "small":
      width = "400px";
      break;
    case "medium":
      width = "800px";
      break;
    case "large":
      width = "1200px";
      break;
    default:
      width = "800px"
  };

  return (
    <Box
      id="lookdaluvContainer"
      maxWidth={width}
      width="100%"
      mx="auto"
      {...props}
    />
  );
};
