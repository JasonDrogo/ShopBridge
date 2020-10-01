import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/services/main-service.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
item : any;
  constructor(private router : Router,private service : MainServiceService) { }

  ngOnInit(): void {
    this.service.getInformation(parseInt(this.router.url.split("\/")[2])).subscribe((data:any)=>{
      
      this.item = data[0];
          })
    
  }

 
}
