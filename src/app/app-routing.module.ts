import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AddressFormComponent} from './address-form/address-form.component';
import {CreditCardFormComponent} from './credit-card-form/credit-card-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'address',
        component: AddressFormComponent
      },
      {
        path: 'credit-card',
        component: CreditCardFormComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'address'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      anchorScrolling: 'enabled',
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
