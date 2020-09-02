import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { CreateStudentDto } from './student/create-student.input';
import { Student } from './student/student.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url: 'mongodb://localhost/school',
    synchronize: true,
    useUnifiedTopology: true,
    entities: [Lesson, Student],
    
    
  })
    ,LessonModule, StudentModule],
})

export class AppModule {}
