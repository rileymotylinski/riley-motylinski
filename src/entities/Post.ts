import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm'
import { randomUUID } from 'crypto';

@Entity()
export class Post {
    @PrimaryColumn()
    guid!: string

    @BeforeInsert()
    setGuid() {
        this.guid = randomUUID();
    }

    @Column()
    title!: string

    @Column()
    content!: string

    @Column('simple-array', { nullable: true }) // should NEVER have a ',' as a character in any of the tags
    tags!: string[]

    @Column()
    date!: Date

   
}