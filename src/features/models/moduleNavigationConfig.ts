import { ModuleListConfiguration } from "./moduleListConfig"
import { ModuleOverviewConfiguration } from "./moduleOverviewConfig"
import { ModuleTimeLineConfiguration } from "./moduleTimeLineConfig"


export interface ModuleNavigationConfiguration {
  activeComponentName: string
  activeCard: number
  enableArrows: boolean
  tabPanel: boolean
  tabSelection: number
  height: string
  width: string
  overviewComponent: ModuleOverviewConfiguration[]
  activityComponent: ModuleListConfiguration[]
  journalComponent: ModuleTimeLineConfiguration[]
  infoComponent: ModuleListConfiguration[]
}
