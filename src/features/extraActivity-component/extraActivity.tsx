import { ActivityBody, ActivityContainer, ActivityFooter, ActivityLocation, ActivityPrice } from "./extraActivity.styled"

interface ExtraActivityProps {
  text: string,
  location: string,
  price: number,
}

export const ExtraActivity : React.FC<ExtraActivityProps> = (props) => {
  console.log(props)
  return (
    <ActivityContainer>
      <ActivityBody text = {props.text}/>
      <ActivityFooter>
        <ActivityPrice price = {props.price}/>
        <ActivityLocation location={props.location} />
      </ActivityFooter>
    </ActivityContainer>
  )
}