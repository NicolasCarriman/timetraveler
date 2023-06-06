import { dayConfiguration } from "../models"

import iconAirplane from "../../theme/icons/airplane.png";
import iconHotel from "../../theme/icons/hotel.png";
import iconActivity from "../../theme/icons/activity.png";
import iconBus from "../../theme/icons/bus.png";

import hotel1 from "../../theme/hotels/hotel1.jpg";
import hotel2 from "../../theme/hotels/hotel2.jpg";
import hotel3 from "../../theme/hotels/hotel3.jpg";
import hotel4 from "../../theme/hotels/hotel4.jpg";

import budapest1 from "../../theme/cities/budapest.jpg";
import budapest2 from "../../theme/cities/budapest2.jpg";
import budapest3 from "../../theme/cities/budapest3.jpg";
import budapest4 from "../../theme/cities/budapest4.jpg";

export const dayBudapest1: dayConfiguration = {
  events: [
    {
      type: "transport",
      hoverText: "You arrived at Aeropuerto de Budapest-Ferenc Liszt (Budapest Airport)",
      icon: iconAirplane,
      date: new Date("2022-05-1"),
      component: {
        name: 'Casa Gangotena Hotel',
        spokenLanguages: ['English', 'Spanish'],
        stars: 4,
        images: [hotel1, hotel2, hotel3, hotel4],
        locationCoordinates: ['-123123123', '18919141'],
        checkinHour: '2 pm',
        checkoutHour: '12 pm',
        startDate: new Date("2022-05-1"),
        endDate: new Date("2022-05-1"),
        rooms: '1x Triple Room',
        breakfast: 'included',
        wifi: 'Yes',
        address: 'Acacia Avenue 22',
        phoneNumber: '+45 4513 5127',
        contactEmail: 'casagangotena@hotel.com',
      }
    },
    {
      type: "hotel",
      hoverText: "You must go to Corinthia Budapest at Erzsébet krt. 43-49, 1073",
      icon: iconHotel,
      date: new Date("2022-05-1"),
      component: {
        name: 'Casa Gangotena Hotel',
        spokenLanguages: ['English', 'Spanish'],
        stars: 4,
        images: [hotel1, hotel2, hotel3, hotel4],
        locationCoordinates: ['-123123123', '18919141'],
        checkinHour: '2 pm',
        checkoutHour: '12 pm',
        startDate: new Date("2022-05-1"),
        endDate: new Date("2022-05-1"),
        rooms: '1x Triple Room',
        breakfast: 'included',
        wifi: 'Yes',
        address: 'Acacia Avenue 22',
        phoneNumber: '+45 4513 5127',
        contactEmail: 'casagangotena@hotel.com',
      }
    }
  ]
}
export const dayBudapest2: dayConfiguration = {
  events: [
    {
      type: "activity",
      hoverText: "Széchenyi Spa Full Day with Optional Pálinka Tour",
      icon: iconActivity,
      date: new Date("2022-05-2"),
      component: {
        name: 'Casa Gangotena Hotel',
        spokenLanguages: ['English', 'Spanish'],
        stars: 4,
        images: [hotel1, hotel2, hotel3, hotel4],
        locationCoordinates: ['-123123123', '18919141'],
        checkinHour: '',
        checkoutHour: '',
        startDate: new Date("2022-05-1"),
        endDate: new Date("2022-05-1"),
        rooms: '1x Triple Room',
        breakfast: 'included',
        wifi: 'Yes',
        address: 'Acacia Avenue 22',
        phoneNumber: '+45 4513 5127',
        contactEmail: 'casagangotena@hotel.com',
      }
    }
  ]
}
export const dayBudapest3: dayConfiguration = {
  events: []
}
export const dayBudapest4: dayConfiguration = {
  events: [
    {
      type: "transport",
      hoverText: "You will go to Budapest Nepliget bus station.",
      icon: iconBus,
      date: new Date("2022-05-4"),
      component: {
        name: 'Casa Gangotena Hotel',
        spokenLanguages: ['English', 'Spanish'],
        stars: 4,
        images: [hotel1, hotel2, hotel3, hotel4],
        locationCoordinates: ['-123123123', '18919141'],
        checkinHour: '',
        checkoutHour: '',
        startDate: new Date("2022-05-1"),
        endDate: new Date("2022-05-1"),
        rooms: '1x Triple Room',
        breakfast: 'included',
        wifi: 'Yes',
        address: 'Acacia Avenue 22',
        phoneNumber: '+45 4513 5127',
        contactEmail: 'casagangotena@hotel.com',
      }
    }
  ]
}

export const dayParis1: dayConfiguration = {
  events: [
    {
      type: "transport",
      hoverText: "You arrived at Paris Gallieni - international Bus station.",
      icon: iconBus,
      date: new Date("2022-05-5"),
      component: {
        name: 'Casa Gangotena Hotel',
        spokenLanguages: ['English', 'Spanish'],
        stars: 4,
        images: [budapest1, budapest2, budapest3, budapest4],
        locationCoordinates: ['-123123123', '18919141'],
        checkinHour: '',
        checkoutHour: '',
        startDate: new Date("2022-05-1"),
        endDate: new Date("2022-05-1"),
        rooms: '1x Triple Room',
        breakfast: 'included',
        wifi: 'Yes',
        address: 'Acacia Avenue 22',
        phoneNumber: '+45 4513 5127',
        contactEmail: 'casagangotena@hotel.com',
      }
    },
    {
      type: "hotel",
      hoverText: "You must go to Hotel Gustave.",
      icon: iconHotel,
      date: new Date("2022-05-5"),
      component: {
        name: 'Casa Gangotena Hotel',
        spokenLanguages: ['English', 'Spanish'],
        stars: 4,
        images: [budapest1, budapest2, budapest3, budapest4],
        locationCoordinates: ['-123123123', '18919141'],
        checkinHour: '',
        checkoutHour: '',
        startDate: new Date("2022-05-1"),
        endDate: new Date("2022-05-1"),
        rooms: '1x Triple Room',
        breakfast: 'included',
        wifi: 'Yes',
        address: 'Acacia Avenue 22',
        phoneNumber: '+45 4513 5127',
        contactEmail: 'casagangotena@hotel.com',
      }
    }
  ]
}

export const dayParis2: dayConfiguration = {
  events: [
    {
      type: "activity",
      hoverText: "You should go to Eiffel Tower at in the Champ de Mars.",
      icon: iconActivity,
      date: new Date("2022-05-6"),
      component: {
        name: 'Casa Gangotena Hotel',
        spokenLanguages: ['English', 'Spanish'],
        stars: 4,
        images: [budapest1, budapest2, budapest3, budapest4],
        locationCoordinates: ['-123123123', '18919141'],
        checkinHour: '',
        checkoutHour: '',
        startDate: new Date("2022-05-1"),
        endDate: new Date("2022-05-1"),
        rooms: '1x Triple Room',
        breakfast: 'included',
        wifi: 'Yes',
        address: 'Acacia Avenue 22',
        phoneNumber: '+45 4513 5127',
        contactEmail: 'casagangotena@hotel.com',
      }
    }
  ]
}
export const dayParis3: dayConfiguration = {
  events: [
    {
      type: "transport",
      hoverText: "You will go to Paris Gallieni - international Bus station.",
      icon: iconBus,
      date: new Date("2022-05-7"),
      component: {
        name: 'Casa Gangotena Hotel',
        spokenLanguages: ['English', 'Spanish'],
        stars: 4,
        images: [budapest1, budapest2, budapest3, budapest4],
        locationCoordinates: ['-123123123', '18919141'],
        checkinHour: '',
        checkoutHour: '',
        startDate: new Date("2022-05-1"),
        endDate: new Date("2022-05-1"),
        rooms: '1x Triple Room',
        breakfast: 'included',
        wifi: 'Yes',
        address: 'Acacia Avenue 22',
        phoneNumber: '+45 4513 5127',
        contactEmail: 'casagangotena@hotel.com',
      }
    }
  ]
}