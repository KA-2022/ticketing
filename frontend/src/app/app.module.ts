import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PaymentFormComponent } from './components/widgets/payment-form/payment-form.component';
import { BuyTicketComponent } from './components/pages/buy-ticket/buy-ticket.component';
import { NgxStripeModule } from 'ngx-stripe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent,
    BuyTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot(environment.stripePublishableKey)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
