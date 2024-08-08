import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{

  constructor(private studentService:StudentsService){}

  studentFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email])
  });
  message:boolean = false;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  saveStudent(){
    console.log(this.studentFormGroup.value);

    this.message = true;

    this.studentService.add(this.studentFormGroup.value)
      .subscribe(() => {
          this.message = true
      });

      this.studentFormGroup.reset();
  }

}
