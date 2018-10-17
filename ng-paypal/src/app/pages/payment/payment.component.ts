import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';



declare let paypal: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  formData: any;
  addScript = false;
  paypalLoad = true;
  totalAmount = 0;
  currency = 'USD';

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ATIZTHUrbZfjc8dRbDWmniHQnS4nDwAxt9v8F-mEKL8gmjLIt2FroSjGP381EfzhEy3hFNNfQSxPtDW3',
      production: 'AUd5n_T-wB85cZpduG16bVVlYCTFf8nU847m_aBOcxRHF8bL-a230Ab8m4-rLGd_i7fouowp4IQl-vjL'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.totalAmount ? this.totalAmount : 100 , currency: this.currency } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log(payment);
      });
    }
  };


  constructor(private _router: Router) { }

  ngOnInit() {
    this.getFormData().then(data => {
      this.formData =  data;
      if (this.formData.Country === ('thailand' || 'thai')) {
        this.totalAmount = 2000.00;
        this.currency = 'THB';
      } else {
        this.totalAmount = 100.00;
        this.currency = 'USD';
      }

    }).catch(err => {
      this._router.navigate(['summary-page']);
    });

    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-button');
        this.paypalLoad = false;
      });
    }


  }
  getFormData() {
    return new Promise((resolve, reject) => {
      const data: any = JSON.parse(localStorage.getItem('formData'));
      try {
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }


}
