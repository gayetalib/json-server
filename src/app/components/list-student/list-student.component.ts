import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService: StudentsService, private router: Router){}

  students:any;
  ngOnInit(): void {
      this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getAll()
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
