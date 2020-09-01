import { Controller, Get, Post, Body } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Controller('lesson')
export class LessonController {

    constructor(private lessonService: LessonService){}

    @Post('/create')
    testCreate(@Body() createLesson: CreateLessonDto){
        

        this.lessonService.createLesson(createLesson);
        return {ok:'ok'}
    }



}
