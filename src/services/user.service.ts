import bcrypt from 'bcrypt';
import { CreateUserInput, UserModel } from '../schema/user.schema';

export class UserService {
	async getUser(id: string) {
		return UserModel.findById(id);
	}

	async getUsers() {
		return UserModel.find();
	}

	async createUser(user: CreateUserInput) {
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
		return UserModel.create(user);
	}

	async updateUser(id: string, user: any) {
		return UserModel.findByIdAndUpdate(id, user, { new: true });
	}

	async deleteUser(id: string) {
		return UserModel.findByIdAndDelete(id);
	}
}
