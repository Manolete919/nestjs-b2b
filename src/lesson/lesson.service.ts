import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {v4  as uuid } from 'uuid';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
    // inject the repository

    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
    ){ }


    async createLesson(createLesson: CreateLessonDto) : Promise<Lesson>{

        const {name,startDate,endDate} = createLesson;

        const lesson = this.lessonRepository.create({
            id: uuid(),
            name, 
            startDate,
            endDate,
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
