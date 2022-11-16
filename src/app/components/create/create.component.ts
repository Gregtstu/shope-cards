import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../settings/services/api.service";
import {ModalService} from "../../settings/services/modal.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public form:FormGroup;
  constructor(private apiserv:ApiService, private modalserv:ModalService) {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) return;
    this.apiserv.addProduct({
      "title": this.form.value.name,
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }).subscribe({
      next:(res) => {
        this.modalserv.close();
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
