import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cartSummary',
  templateUrl: './cartSummary.component.html',
  styleUrls: ['./cartSummary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  constructor(private cartService:CartService,private toastrService:ToastrService) { }

  ngOnInit() {
    this.getCart();
  }

  getCart(){
    this.cartItems=this.cartService.list();
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error("Sepetten silindi.",product.productName)
  }
}
