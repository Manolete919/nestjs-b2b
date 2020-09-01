import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url: 'mongodb://localhost/school',
    synchronize: true,
    useUnifiedTopology: true,
    entities: [Lesson]
  })
    ,LessonModule],
})
export class AppModule {}
