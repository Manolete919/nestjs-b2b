import {IsNotEmpty, IsDateString} from  'class-validator';
export class CreateStudentDto {
    
    @IsNotEmpty()
    id: string;
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    
}