import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent implements OnInit {
  form: FormGroup;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }
}
