import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";


//this is the test entity
@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    name = "";

    @Column("text")
    address = "";

    @Column('varchar')
    line_id = "";

    // @ManyToMany(type => Category, { cascade: true })
    // @JoinTable()
    // categories = undefined;

}