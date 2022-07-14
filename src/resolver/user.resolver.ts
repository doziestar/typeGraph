import {Query, Resolver} from "type-graphql";
import {User} from "../schema/user.schema";

@Resolver()
export default class UserResolver {

    @Query((type) => User)
    me() {
        return {
            password: "346644",
            _id: "1",
            name: "John Doe",
            email: "dozie@gmail.com"
        }
    }
}