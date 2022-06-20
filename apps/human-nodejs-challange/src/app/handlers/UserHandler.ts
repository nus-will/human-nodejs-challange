
import { AppDataSource } from '../../database/data-source';
import IUserHandler from './interfaces/IUserHandler';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/User';
import * as bcryptjs from 'bcryptjs';

const SALT_ROUNDS = 10;

class UserHandler implements IUserHandler {
  repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }
  async create(payload: { username: string, password: string }): Promise<User> {
    try {
      const newUser = new User();
      newUser.username = payload.username;
      newUser.password = await bcryptjs.hash(payload.password, SALT_ROUNDS);

      const savedUser = await this.repo.save(newUser);

      return await this.repo.findOne({
        where: {
          id: savedUser.id
        }
      });
    } catch (error) {
      throw error
    }
  }
}

export default new UserHandler();
