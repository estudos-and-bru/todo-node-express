import { getCustomRepository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

class CreateUserService {
  public async execute(username: string, email: string, password: string): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = usersRepository.create({
      username,
      email,
      password,
    });
    console.log(user);
    await usersRepository.save(user);
    return user;
  }
}

export { CreateUserService };
