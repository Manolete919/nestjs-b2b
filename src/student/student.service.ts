import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './create-student.input';


@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ){ }


    async createStudent(createStudent: CreateStudentDto) : Promise<Student>{

        const {id, firstName,lastName} = createStudent;

        const student = this.studentRepository.create({
            id,
            firstName, 
            lastName,
        });

        await this.studentRepository.save(student)

        return student;

    }



}
