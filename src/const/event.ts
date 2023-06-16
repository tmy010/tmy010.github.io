import moment from "moment";

export enum EventName {
    OurStart = "OurStart",
    OurFirstMet = "OurFirstMet",
    OurFirstCall = "OurFirstCall",
    OurPenangTrip = "OurPenangTrip",
    OurFirstDate = "OurFirstDate",
    OurFirstDay = "OurFirstDay",
    OurCameronTrip = "OurCameronTrip",
    OurBangkokTrip = "OurBangkokTrip",
    OurJapanTrip = "OurJapanTrip",
}

export class EventDates {
    static Now = moment('2023-06-08').valueOf()
    static OurStart = moment('2023-03-10').valueOf()
    static OurFirstMet = moment('2023-03-24').valueOf()
    static OurFirstCall = moment('2023-03-30').valueOf()
    static OurPenangTrip = moment('2023-04-15').valueOf()
    static OurFirstDate = moment('2023-05-20').valueOf()
    static OurFirstDay = moment('2023-06-29').valueOf()
    static OurCameronTrip = moment('2023-06-30').valueOf()
    static OurBangkokTrip = moment('2023-07-27').valueOf()
    static OurJapanTrip = moment('2024-01-15').valueOf()
}

export enum EventTextColor {
    OurStart = "#65503E",
    OurFirstMet = "#8EDFFA",
    OurFirstCall = "#385B66",
    OurPenangTrip = "#588D9C",
    OurFirstDate = "#FABC60",
    OurFirstDay = "#CE2300",
    OurCameronTrip = "#C5ECBE",
    OurBangkokTrip = "#232A31",
    OurJapanTrip = "#B22124",
}

export enum EventBackgroundColor {
    OurStart = "#EFEAE6",
    OurFirstMet = "#1F4E79",
    OurFirstCall = "#8FC9AE",
    OurPenangTrip = "#9CD9DE",
    OurFirstDate = "#E16262",
    OurFirstDay = "#FFC0C2",
    OurCameronTrip = "#4797B1",
    OurBangkokTrip = "#D3F5FF",
    OurJapanTrip = "#F2E6CE",
}