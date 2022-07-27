import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-retailsector',
  templateUrl: './retailsector.component.html',
  styleUrls: ['./retailsector.component.scss']
})
export class RetailsectorComponent {
  formdata = new FormGroup({
    firstname:new FormControl(""),
    lastname:new  FormControl(""),
    phonenumber: new FormControl(""),
  });
}

  




