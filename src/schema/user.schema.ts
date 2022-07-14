import {Field, ObjectType} from "type-graphql";
import {prop} from "@typegoose/typegoose";

@ObjectType()
export class User {
    @Field((type) => String)
    _id?: string;

    @Field((type) => String)
    @prop({required: true})
    name?: string;

    @Field((type) => String)
    @prop({required: true, unique: true})
    email?: string;

    @Field((type) => String)
    @prop({required: true})
    password?: string;
}