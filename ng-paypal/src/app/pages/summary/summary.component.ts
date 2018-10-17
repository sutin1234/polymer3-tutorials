import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  formData: any;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.getFormData().then(data => {
      this.formData =  data;
    }).catch(err => {
      this._router.navigate(['register-next']);
    });
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
  payment(){
    this._router.navigate(['payment-page']);
  }

}
