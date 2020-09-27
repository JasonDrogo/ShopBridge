import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() item : any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if(!this.item.image.url)
    this.getImage(this.item.image.data);
  }
  ngOnChanges(changes : SimpleChange){
     
  }
  getImage(item){
    let TYPED_ARRAY = new Uint8Array(item);
    const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
    let base64String = btoa(STRING_CHAR);
    console.log(this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + base64String));
    this.item.image.url = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String);
  }

}
