import { ThemeColor } from '../../models/Theme';

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
