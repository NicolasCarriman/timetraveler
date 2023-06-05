import { IDestiny } from "../../models/intineraryReducer";
import { HeaderBanner } from "../header-banner/headerBanner";
import { currentComponent } from "../navigation-component/NavigationComponent";

interface IMainComponent {
  currentDestiny: IDestiny
  currentSlide: number
  componentName: currentComponent
  children: React.ReactNode
}

export const MainComponet: React.FC<IMainComponent> = (props) => {

  const bannerType = (componentName: currentComponent) => {
    switch(componentName) {
      case 'activity':
        return null
      case 'info':
        return <HeaderBanner imageUrl={props.currentDestiny.images[props.currentSlide]} />
      case 'overview':
        return <HeaderBanner imageUrl={props.currentDestiny.images[props.currentSlide]} />
    }
  }
  return (
    <>
      {
        bannerType(props.componentName)
      }
      {
        props.children
      }
    </>
  );
}
