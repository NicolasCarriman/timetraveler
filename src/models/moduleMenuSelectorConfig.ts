import { ThemeColor } from './Theme';

export type cardsType = {
	title: string
	textAreaValue: string
	imgUrl: string
	maskActive: boolean
};

export interface ModuleMenuSelectorConfiguration {
  accountId: string
  cards: cardsType[]
  height: string
  width: string
}
