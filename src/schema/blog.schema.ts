import { getModelForClass, prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Blog {
	@Field((type) => String)
	id?: string;

	@Field((type) => String)
	@prop({ required: true })
	title?: string;

	@Field((type) => String)
	content?: string;
}

export const BlogModel = getModelForClass(Blog);
