import { Injectable } from '@nestjs/common';
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

        return this.lessonRepository.save(lesson);

    }
}
