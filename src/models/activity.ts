  export interface Activity {
    position?: number;
    id: string;
    selected: boolean;
    text: string;
  };

  export interface ActivityState {
    text: string
    title: string
    price: number
    location: string
    imgUrl?: string
  }