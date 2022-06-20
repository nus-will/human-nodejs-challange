import { Entity, Column } from 'typeorm';
import { Base, IBase } from './Base';

export interface IUser extends IBase {
  username: string,
  password: string
}

@Entity()
export class User extends Base implements IUser {
  @Column({ name: 'username' })
  username: string

  @Column({ name: 'password', select: false })
  password: string
}
