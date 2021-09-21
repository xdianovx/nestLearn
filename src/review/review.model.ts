import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";
import { Types } from "mongoose";

export interface ReviewModes extends Base {}
export class ReviewModel extends TimeStamps{
    @prop()
    title: string

    @prop()
    name: string

    @prop()
    description: string

    @prop()
    rating: number

    @prop()
    productId: Types.ObjectId
}
