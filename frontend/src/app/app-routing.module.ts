import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTicketComponent } from './components/pages/buy-ticket/buy-ticket.component';

const routes: Routes = [
  { path: "buy-ticket", component: BuyTicketComponent },
  { path: "**", redirectTo: "buy-ticket" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
