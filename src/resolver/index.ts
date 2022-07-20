import BlogResolver from './blog.resolver';
import UserResolver from './user.resolver';

export const resolvers = [UserResolver, BlogResolver] as const;
