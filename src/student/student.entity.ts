import { Entity, ObjectIdColumn, PrimaryColumn, Column, OneToMany, Unique, JoinColumn } from "typeorm";
import { Lesson } from "src/lesson/lesson.entity";

@Entity()
@Unique(['id'])
export class Student {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(type => Lesson, lesson => lesson.student, {eager: false})

    lessons: Lesson[];

}