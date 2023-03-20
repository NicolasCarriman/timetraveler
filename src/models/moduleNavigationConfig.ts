import { ThemeColor } from './Theme';

export interface ModuleNavigationConfiguration {
  id: string
  activeComponentName: string
  themeColor: ThemeColor
  themeBackgroundColor: ThemeColor
  animationsMode: boolean
  editMode: boolean
  leftArrow: boolean
  rightArrow: boolean
  tabPanel: boolean
  tabSelection: number
  height: string
  width: string
}
