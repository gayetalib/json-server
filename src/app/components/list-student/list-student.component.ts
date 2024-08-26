import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students:any;
  destroy$:Subject<boolean> = new Subject();

  constructor(private studentService: StudentsService, private router: Router){}

  ngOnInit(): void {
      this.getAllStudents();
  }

  ngOnDestroy() : void{
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getAllStudents(){
    this.studentService.getAll()
    .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) =>  {

            console.log(data);
            this.students = data;
        },
        error: (e) => {
          console.log('error :', e);
        }
      })
  }

  deleteStudent(id: any){
    console.log('ID : ', id);
    this.studentService.delete(id).subscribe((result)=> {
      console.log('Result : ', result);
      this.ngOnInit();
    });
  }

  editStudent(id:any){
    console.log('edit id : ', id);
    this.router.navigate([`edit/${id}`]);
  }

}
