import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-next-register',
  templateUrl: './next-register.component.html',
  styleUrls: ['./next-register.component.css'],
  providers: [CourseService]
})
export class NextRegisterComponent implements OnInit {

  public myForm: FormGroup;
  constructor(private _router: Router, private _courseServies: CourseService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      noted: new FormControl('')
    });

    this.getFormData().then(data => {
      if(data == null || data == '' || !data){
        this._router.navigate(['register-course']);
      }
    });
  }
  save(formData, formValid){
    let data:any = JSON.parse(localStorage.getItem('formData'));
    if(!data._id) data._id = new Date().getTime();
    if(formData.noted) data.noted = formData.noted;
    localStorage.setItem('formData',JSON.stringify(data));
    this.sendData(data);
  }

  getFormData(){
    return new Promise((resolve, reject) => {
      let data:any = JSON.parse(localStorage.getItem('formData'));
      try{
        resolve(data)
      }catch(err){
        reject(err)
      }
    });
  }

  sendData(dataCourse){
    this._courseServies.saveCourse(dataCourse).subscribe((response: any) => {
     if(response.status == 200){
        this._router.navigate(['summary-page']);
     }else{
       alert('transaction fail!');
     }
    });
  }

}
