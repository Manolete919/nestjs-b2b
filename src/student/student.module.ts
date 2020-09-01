import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './create-student.input';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { Student } from './student.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
