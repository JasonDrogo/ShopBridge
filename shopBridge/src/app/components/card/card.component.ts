import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { MainServiceService } from 'src/services/main-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() item : any;
  constructor(private sanitizer: DomSanitizer,private dataService : MainServiceService , private router : Router) { }
cartData :any[]=this.dataService.cartData;

  ngOnInit(): void {
    
    
  }
  ngOnChanges(changes : SimpleChange){
    this.getImage(this.item.image.data);
  }
  getImage(item){
    let TYPED_ARRAY = new Uint8Array(item);
    const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
    let base64String = btoa(STRING_CHAR);

    this.item.image.url = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + base64String);
    
  }


  saveToBag(item){ 
      let item_To_be_Pushed = {
          id : item.id,
          name:item.name,
          description:item.description,
          price :item.price, 
      }
    this.dataService.uploadToShippingCart(item_To_be_Pushed).subscribe((data:any)=>{
        alert("Added to Cart");
        
        this.getdataFromShoppinCart();
    })
  }


  getdataFromShoppinCart(){
    this.dataService.getdataShoppingCart().subscribe((data:any)=>{
this.cartData = data;
this.dataService.cartData = data;



    });
  }
  verify(id : number,buttonName : string){
let a = this.cartData.findIndex(a => a.id ==id);

if(a != -1){
  if(buttonName == 'save')
  return true;
  else return false
}
else{
  if(buttonName == 'save')
  return false;
  else return true;
  }
}
 

removeFromBag(item:any){
  if(confirm("Do You Want to Delete "+item.name + " from your cart ?"))
this.dataService.deleteFromCart(item.id).subscribe((data)=>{
  this.getdataFromShoppinCart();
})
}


routeTo(id : number){
  this.router.navigateByUrl(`/information/${id}`);
}
}