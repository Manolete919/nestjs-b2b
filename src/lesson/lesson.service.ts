import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {v4  as uuid } from 'uuid';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Student } from 'src/student/student.entity';

@Injectable()
export class LessonService {
    // inject the repository

    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
        @InjectRepository(Student) private studentRepository: Repository<Student>
    ){ }


    async createLesson(createLesson: CreateLessonDto) : Promise<Lesson>{

        const {userid,name,startDate,endDate} = createLesson;

        const student = await this.studentRepository.findOne({id:userid});

        const lesson = this.lessonRepository.create({
            id: uuid(),
            name, 
            startDate,
            endDate,
            student,
        });

        
        return await this.lessonRepository.save(lesson);

    }

    async getLessonById(id: string): Promise<Lesson>{

        // { id } , where there is another fild, by default it picks _id
        const found = await this.lessonRepository.findOne({id});

        if(!found){
            throw new NotFoundException(`Lesson with ID ${id} not found`);
        }

        return found;

    }
}
