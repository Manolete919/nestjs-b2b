import { Entity, ObjectIdColumn, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Lesson } from "src/lesson/lesson.entity";

@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(type => Lesson, lesson => lesson.id, {eager: true})
    lessons: Lesson[];

}