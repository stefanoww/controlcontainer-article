import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, first} from 'rxjs/operators';

enum Step {
  Address = 'address',
  CreditCard = 'creditCard'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'control-container';
  form: FormGroup;
  Step = Step;
  selectedStep = Step.Address;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const {url} = event;
        if (url === '/address') {
          this.selectedStep = Step.Address;
        } else if (url === '/credit-card') {
          this.selectedStep = Step.CreditCard;
        }
      });

    this.form = this.fb.group({
      address: this.fb.group({
        city: [''],
        street: [''],
        homeNumber: ['']
      }),
      creditCard: this.fb.group({
        cartNumber: [''],
        ccvNumber: [''],
        expirationDate: ['']
      })
    });
  }

  goToNextStep(): void {
    this.router.navigate(['/credit-card']);
  }

  submit(): void {
    console.log(this.form);
  }
}
