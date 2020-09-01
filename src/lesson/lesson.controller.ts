import { Controller, Get } from '@nestjs/common';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {

    constructor(private lessonService: LessonService){}

    @Get()
    testCreate(){
        this.lessonService.createLesson('AAAA',new Date().toISOString(),new Date().toISOString());
        return {ok:'ok'}
    }



}
