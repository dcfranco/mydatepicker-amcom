import { IMyDate } from "./my-date.interface";
import { Moment } from "moment";
export interface IMyDateModel {
    date: IMyDate;
    jsdate: Date;
    formatted: string;
    epoc: number;
    moment: Moment;
}
