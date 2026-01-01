import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    content!: string

    @Column('simple-array', { nullable: true }) // should NEVER have a ',' as a character in any of the tags
    tags!: string[]

    @Column()
    date!: Date
}