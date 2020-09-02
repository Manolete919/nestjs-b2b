import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './lesson.entity';

@Controller('lesson')
export class LessonController {

    constructor(private lessonService: LessonService){}

    @Post('/create')
    // Built-in validation pipe
    @UsePipes(ValidationPipe)
    testCreate(@Body() createLesson: CreateLessonDto){
        return this.lessonService.createLesson(createLesson);
         
    }

    @Get('/:id')
    getLessonById(@Param('id') id: string){
        return this.lessonService.getLessonById(id);
    }



 

}
