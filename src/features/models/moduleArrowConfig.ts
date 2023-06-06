export interface ArrowConfig<T> {
  arrayData: T;
  currentIndex: number;
  next: () => void; 
  prev: () => void;
  side: string
}