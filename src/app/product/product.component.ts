import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Product Name';
  itemCount = 0; 
  constructor() { }

  ngOnInit() {
  }
  addItem() { 
    this.itemCount++;
 } 
}
