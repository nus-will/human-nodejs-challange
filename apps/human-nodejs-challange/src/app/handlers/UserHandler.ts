
import { AppDataSource } from '../../database/data-source';
import IUserHandler from './interfaces/IUserHandler';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/User';
import * as bcryptjs from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config/config';

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

  async login(payload: { username: string, password: string }): Promise<string> {
    try {
      const user = await this.repo.findOne({
        where: {
          username: payload.username
        },
        select: ['username', 'password']
      })

      if (!user) {
        throw Error('Crendential is invalid');
      }

      const comparePasswordFlag = await bcryptjs.compare(
        payload.password,
        user.password
      )

      if (!comparePasswordFlag) {
        throw Error('Crendential is invalid');
      }

      const token = jwt.sign(
        {id: user.id, username: user.username },
        config.JWT_SECRET,
        { expiresIn: '1h' }
      );

      return token;
    } catch (error) {
      throw error
    }
  }
}

export default new UserHandler();
