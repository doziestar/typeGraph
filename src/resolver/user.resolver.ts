import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {CreateUserInput, User} from "../schema/user.schema";
import {UserService} from "../services/user.service";

@Resolver()
export default class UserResolver {

    constructor(private userService: UserService) {
        this.userService = new UserService();
    }

    @Mutation((type) => User)
    async createUser(@Arg('input') user: CreateUserInput) {
        return this.userService.createUser(user);
    }

    async updateUser(id: string, user: User) {
        return this.userService.updateUser(id, user);
    }

    async deleteUser(id: string) {
        return this.userService.deleteUser(id);
    }


    @Query((type) => User)
    me() {
        return this.userService.getUser("1");
    }

    @Query((type) => [User])
    users() {
        return [
            {
                password: "346644",
                _id: "1",
                name: "John Doe",
                email: "dozie@gmail.com"
            },
            {
                password: "346644",
                _id: "2",
                name: "Jane Doe",
                email: "jane@gmail.com"
            },
        ]
    }
}