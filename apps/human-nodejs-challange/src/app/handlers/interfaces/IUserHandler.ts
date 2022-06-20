import { User } from '../../../database/entities/User';

export default interface IArticleHandler {
  create(payload: { username: string, password: string }): Promise<User>
}
