import { Box, BoxProps, Container } from "@chakra-ui/react";

export const TabContainer: React.FC<BoxProps> = (props) => {
  return (
    <Container
      margin='0'
      id='tab-container'
      fontFamily='Space Grotesk'
      display='flex'
      flexDirection='row'
      minH='5vh'
      minW='38.2vw'
      justifyContent='left'
      {...props}
    />
  );
}


interface TabProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  activated: boolean;
  name: string;
  isHover: boolean;
}
export const Tab: React.FC<TabProps> = ({
  color,
  children,
  onClick,
  activated,
  name,
  isHover,
}) => {

  return (
    activated ?
      <Box
        id='neonShadow'
        boxShadow='rgba(0, 26, 255, 0.5) 0px -2px 0px, rgba(255, 255, 255, 0.5) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -8px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px;'
        boxSizing='border-box'
        borderRadius="9px"
      >
        <button
          onClick={onClick}
          style={{
            textAlign: 'center',
            color: color,
            borderRadius: "5px",
            width: "7vw",
            paddingTop: "1.5vh",
            background: isHover ? 'linear-gradient(180deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)' : '#070707',
          }}>{name}</button>
      </Box>
      :
      <Box
        id='neonShadow'
        boxSizing='border-box'
      >
        <button
          onClick={onClick}
          style={{
            textAlign: 'center',
            color: color,
            borderRadius: "5px",
            width: "7vw",
            paddingTop: "1.5vh",
            transition: '0.4s',
            boxShadow: isHover ? 'rgba(0, 26, 255, 1) 0px -2px 0px, rgba(255, 255, 255, 0.9) 0px -4px 0px, rgba(255, 255, 255, 0.2) 0px -8px 0px, rgba(255, 255, 255, 0.2) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px' : 'rgba(0, 26, 255, 0) 0px -2px 0px, rgba(255, 255, 255,0) 0px -4px 0px, rgba(255, 255, 255, 0) 0px -4px 0px, rgba(255, 255, 255, 0.0) 0px -16px 8px, rgba(255, 255, 255, 0.0) 0px -32px 16px',
            background: isHover ? 'linear-gradient(180deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)' : '#070707',
          }}>{name}
        </button>
      </Box>
  );
};