import { Repository, EntityRepository } from "typeorm";
import { Lesson } from "./lesson.entity";

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson>{

    
    async getLessonsByUserId(id: string): Promise<Lesson[]>{

        //const query = await this.createQueryBuilder('lesson');
        //query.innerJoinAndSelect('lesson.student', 'student')
        //query.where('student.id = :id', { id})

        //query.leftJoinAndMapMany
        
        //const lessons = query.getMany();

        /*
        this.createQueryBuilder().select('lesson').from(Lesson, 'Lesson')
                    .leftJoinAndMapMany('lesson.posts', qb => qb.select().from(Post, 'post'), 'post', 'post."LessonId" = Lesson.id'); */

        return null;

    }

} 