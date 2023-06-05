import { ModuleHotelConfiguration } from "./moduleHotelConfig";

export type dayConfiguration = {
	events: pointConfiguration[]
};

export type pointConfiguration = {
	type: string
	hoverText: string
	icon: string
	date: Date
  component: ModuleHotelConfiguration
};

export interface ModuleTimeLineConfiguration {
  timeLineId: string
  startDate: Date
  endDate: Date
  days: dayConfiguration[]
}
