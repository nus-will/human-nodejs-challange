import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

export interface IBase {
  id: string,
  createdAt: Date,
  updatedAt: Date
}

export abstract class Base implements IBase {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt!: Date;
}
