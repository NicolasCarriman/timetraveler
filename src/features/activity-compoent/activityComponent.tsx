import { Box } from "@chakra-ui/react";
import React from "react";
import { CarrouselContainer } from "../../components/carrousel";
import { useCarrousel } from "../../hooks/useCarrousel";
import { Activity } from "../../models/activity";

interface IList {
  error: boolean;
  loading: boolean;
  onError: any;
  onLoading: any;
  render: any;
  searchedActivitis: Activity[];
  onEmptyActivitis: any;
  children?: React.ReactNode;
};

export const ActivityList: React.FC<IList> = (props) => {

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [activities, setActivities] = React.useState(props.searchedActivitis);

  function getElement(ref: React.RefObject<HTMLDivElement>) {
    const el = sectionRef.current?.firstChild as unknown as HTMLDivElement;
      return el;
  }

  React.useEffect(() => {
    setActivities(props.searchedActivitis);
  }, [props.searchedActivitis]);


  return (
    <Box
      ref={sectionRef}
      overflow="hidden"
      id='carrouselText'
      as='section'
      display='flex'
      flexDir='column'
      gap='6px'
      maxH={'120px'}
    >
      <CarrouselContainer>
        {props.error && props.onError()}
        {!props.searchedActivitis && props.onEmptyActivitis()}
        <Box
          position="absolute"
        >
        </Box>
      </CarrouselContainer>
    </Box>
  )
};
