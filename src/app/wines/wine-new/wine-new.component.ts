import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wine } from 'src/app/model/interfaces';
import { NameWineValidator } from '../../validators/name-wine.validator';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent implements OnInit {
public wine: Wine = {} as Wine;
public message:string = "";
  

  public wineForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: ['', [Validators.required, NameWineValidator]],
      price: [1, [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{3,})$')]],
      isOnSale: false
    });
  }
  createWine() {
    if (this.wineForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
      
    } else {
      this.message = '';
      this.wine = this.wineForm.value;
      console.log('Creating wine', this.wine);
    }
  }

  get name() { return this.wineForm.get('name'); }
  get price() { return this.wineForm.get('price'); }
  get imageUrl() { return this.wineForm.get('imageUrl'); }

}
