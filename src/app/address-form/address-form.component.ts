import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  form: FormGroup;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }

}
