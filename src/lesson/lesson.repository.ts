/* import { Repository, EntityRepository } from "typeorm";
import { Lesson } from "./lesson.entity";

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson>{

    

    async test(id: string): Promise<Lesson>{

        const query = await this.createQueryBuilder('lesson');
        query.innerJoinAndSelect('lesson.student', 'student')
        query.where('student.id = :id', { id})
        return query.getOne();

    }

} */