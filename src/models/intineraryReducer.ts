
interface IIntinerary {
  title: string
  imgUrl?: string
  maskActive: boolean
}

export interface IDestiny extends IIntinerary {
  textArea: string
  images: string[]
  activities?: string[]
}

export interface ICoreIntineraryData {
  intinerary: IDestiny[]
  itineraryId: string
  currentDestiny: IDestiny
}
