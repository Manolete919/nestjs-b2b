import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonController } from './lesson.controller';

// Se necesita definir TypeOrm. This allows us to inject our repository for our lessons.
// When we do it in the submodules is going to be for feature
@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonService],
  controllers: [LessonController]
})
export class LessonModule {}
