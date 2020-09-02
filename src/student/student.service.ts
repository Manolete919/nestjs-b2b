import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
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


        try{
            await this.studentRepository.save(student);
        }catch(error){
            console.log(error.code);
            if(error.code === 11000){
                throw new ConflictException(`User with ID ${id} exists`);
            }else{
                throw new InternalServerErrorException();
            }
        }


        delete student._id;
        return student;

    }


    async getStudentById(id: string): Promise<Student>{

        

        // { id } , where there is another fild, by default it picks _id
        const found = await this.studentRepository.findOne({id},{ relations: ['lessons'] });

        if(!found){
            throw new NotFoundException(`Student with ID ${id} not found`);
        }

        //console.log('encontrado',found.lessons.length);

        return found;

    }



}
