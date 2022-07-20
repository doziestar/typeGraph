import { Query, Resolver } from 'type-graphql';
import { Blog } from '../schema/blog.schema';

@Resolver()
export default class BlogResolver {
	constructor() {}

	@Query((type) => [Blog])
	async blogs() {
		return [
			{
				title: 'Blog 1',
				content: 'Content 1',
				id: '1',
			},
			{
				title: 'Blog 2',
				content: 'Content 2',
				id: '2',
			},
		];
	}
}
