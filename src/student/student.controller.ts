import { Controller, Body, Post, UsePipes, ValidationPipe, Param, Get } from '@nestjs/common';
import { CreateStudentDto } from './create-student.input';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private studentService: StudentService){}

    @Post('/create')
    // Built-in validation pipe
    @UsePipes(ValidationPipe)
    testCreate(@Body() createStudent: CreateStudentDto){
        return this.studentService.createStudent(createStudent);       
    }


    @Get('/:id')
    getLessonById(@Param('id') id: string){
        return this.studentService.getStudentById(id);
    }

}
