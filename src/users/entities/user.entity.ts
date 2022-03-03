import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user') // <-- Right here
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of user' })
  userId: string;

  @Column()
  @Field(() => String, { description: 'first name of the user)' })
  firstName: string;

  @Column()
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;

  @Column()
  @Field(() => String, { description: 'email of the user' })
  email: string;

  @Column()
  @Field(() => String, { description: 'role of the user' })
  role: string;

  @Column()
  @Field(() => Number, { description: 'exampleuser 1' })
  exampleField: number;
}
