import ApiError from "../Helpers/ErrorClass";

const users = [];

export default class AuthService {
    static createUser(user) {
        if(!user) {
            throw new ApiError(400, 'An error occurred');
        }

        users.push(user);

        return user;
    }
}