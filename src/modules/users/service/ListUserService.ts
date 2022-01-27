import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class ListUserServise {
    public async execute(): Promise<User[]> {
        const usersRepository = getCustomRepository(UsersRepository);

        const users = usersRepository.find();

        return users;
    }
}

export default ListUserServise;
