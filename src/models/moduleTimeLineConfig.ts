import { ThemeColor } from './Theme';

export type dayConfiguration = {
	events: pointConfiguration[]
};

export type pointConfiguration = {
	type: string
	hoverText: string
	icon: string
	date: Date
};

export interface ModuleTimeLineConfiguration {
  timeLineId: string
  startDate: Date
  endDate: Date
  themeColor: ThemeColor
  themeBackgroundColor: ThemeColor
  animationsMode: boolean
  editMode: boolean
  height: string
  width: string
}
