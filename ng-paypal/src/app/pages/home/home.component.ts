import { Component, OnInit } from '@angular/core';
import { CompanyTypeService } from '../../services/company-type.service';
import { CompanyType } from '../../interfaces/company-type';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { ReplaySubject, Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CompanyTypeService, CountryService]
})
export class HomeComponent implements OnInit {
  companyType: CompanyType[];
  countries: Country[];
  public myForm: FormGroup;
  public summited: boolean = false;
  data:any = {};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(private _companyTypeService: CompanyTypeService,
    private _countryService: CountryService, private _router: Router) { }

  ngOnInit() {
   this._companyTypeService.getCompanyType().subscribe((data: any) => {
     this.companyType = data
   });
   this._countryService.getCountry().subscribe((country:any) => {
     this.countries =  country;
   });

    this.myForm = new FormGroup({
      Title: new FormControl('',[Validators.required]),
      FirstName: new FormControl('',[Validators.required]),
      MiddleName: new FormControl('',[Validators.required]),
      LastName: new FormControl('',[Validators.required]),
      Name_on_Badge: new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      Phone: new FormControl('',[Validators.required, Validators.pattern("[0-9]{10}")]),
      Fax: new FormControl('',[Validators.required,Validators.pattern("[0-9]{9}")]),
      Affiliation: new  FormControl('',[Validators.required]),
      Affiliation_Type: new FormControl('',[Validators.required]),
      Department: new FormControl('',[Validators.required]),
      Email_address_1: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      Email_address_2: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      City: new FormControl('',[Validators.required]),
      State_Province_District: new FormControl('',[Validators.required]),
      PostalCode: new FormControl('',[Validators.required, Validators.pattern("[0-9]{5}"), Validators.maxLength(5)]),
      Country: new FormControl('',[Validators.required]),
      RegistrationRate: new FormControl('',[Validators.required]),
    });
  }
  save(formData, formValid){
    this.summited = true;

    this.data = formData;
    this.data.noted = '';
    this.data._id =  '';
    console.log(this.data)

    if(formValid){
      localStorage.setItem('formData', JSON.stringify(this.data));
      this._router.navigate(['register-next']);
    }
  }
}
