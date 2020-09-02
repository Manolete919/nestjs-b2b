import { Entity, PrimaryColumn, Column, ObjectIdColumn, ManyToOne, JoinColumn, JoinTable, BaseEntity } from "typeorm";
import { type } from "os";
import { Student } from "src/student/student.entity";

@Entity()
export class Lesson extends BaseEntity {
    
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    @ManyToOne(type => Student, student => student.lessons, {eager: true})
    @JoinColumn()
    //@JoinTable()
    student: Student;
 
 


}