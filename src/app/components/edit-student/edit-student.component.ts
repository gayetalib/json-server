import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  constructor(
    private studentService: StudentsService,
    private activatedRouter: ActivatedRoute,
    private router: Router){}

  idStudent:any;
  studentFormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  ngOnInit(): void {
   console.log('ID from params : ', this.activatedRouter.snapshot.params['id']);
   this.idStudent = this.activatedRouter.snapshot.params['id'];
      this.studentService.getById(this.idStudent).subscribe(
        (result: any) => {
          console.log('Student by ID : ',result);
          this.studentFormGroup = new FormGroup({
            name: new FormControl(result['name']),
            email: new FormControl(result['email'])
          });
        }
      );
  }

  message: boolean = false;

  updateStudent(){
    //console.log('Data : ', this.studentFormGroup.value);
    this.studentService.update(
      this.activatedRouter.snapshot.params['id'], this.studentFormGroup.value)
      .subscribe(
        (result) => {
          console.log('updated student : ', result);
        }
      );
      this.router.navigate(['/list']);
  }
}
