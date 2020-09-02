import {IsNotEmpty, IsDateString} from  'class-validator';
export class CreateLessonDto {
    
    @IsNotEmpty()
    userId: string;
    @IsNotEmpty()
    name: string;
    @IsDateString()
    @IsNotEmpty()
    startDate: string;
    @IsDateString()
    @IsNotEmpty()
    endDate: string;
}