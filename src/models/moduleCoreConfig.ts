import { ThemeColor } from './Theme';

export interface ModuleCoreConfiguration {
  activeComponentName: string
  selectedCard: number
  themeColor: ThemeColor
  themeBackgroundColor: ThemeColor
  animationsMode: boolean
  editMode: boolean
  height: string
  width: string
}
