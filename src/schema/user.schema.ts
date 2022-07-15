import {Field, InputType, ObjectType} from "type-graphql";
import {getModelForClass, prop} from "@typegoose/typegoose";
import {IsEmail, IsString, MinLength} from "class-validator";

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

export const UserModel = getModelForClass(User);

@InputType()
export class CreateUserInput {
    @Field((type) => String)
    @prop({required: true})
    @IsString()
    @MinLength(3, {message: "Name must be at least 3 characters long"})
    name: string;

    @Field((type) => String)
    @prop({required: true, unique: true})
    @IsEmail()
    @MinLength(3, {message: "Email must be at least 3 characters long"})
    email: string;

    @Field((type) => String)
    @prop({required: true})
    @IsString()
    password: string;
}
