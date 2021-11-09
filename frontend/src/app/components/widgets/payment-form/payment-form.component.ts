import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { StripeService } from 'ngx-stripe';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) { }

  checkout() {
    // Check the server.js tab to see an example implementation
    this.http.post(`${environment.apiURL}/payment/create-checkout-session`, {})
      .pipe(
        switchMap(session => {
          return this.stripeService.redirectToCheckout({ sessionId: (session as any).id })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }

  ngOnInit(): void {
  }

}
