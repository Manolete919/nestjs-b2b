import { Controller, Body, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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


}
