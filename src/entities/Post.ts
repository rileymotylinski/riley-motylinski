import { UUID } from 'crypto'
import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm'


@Entity()
export class Post {
    @PrimaryColumn({"type" : "uuid"})
    guid!: string

    @Column()
    title!: string

    @Column()
    content!: string

    @Column('simple-array', { nullable: true }) // should NEVER have a ',' as a character in any of the tags
    tags!: string[]

    @Column()
    date!: Date

   
}