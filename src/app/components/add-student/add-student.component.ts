import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
  studentFormGroup: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.email]]
  });

  message:boolean = false;


  constructor(
    private studentService:StudentsService,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  saveStudent(){
    //console.log(this.studentFormGroup.value);
    if (this.studentFormGroup.valid) {
      this.message = true;

    this.studentService.add(this.studentFormGroup.value)
      .subscribe(() => {
          this.message = true
      });

      this.studentFormGroup.reset();
    }
  }

}
