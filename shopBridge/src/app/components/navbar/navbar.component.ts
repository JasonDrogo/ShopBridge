import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MainServiceService } from 'src/services/main-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 public length: number ;
  constructor(private _mainService : MainServiceService) {}

  ngOnInit(): void {

  }
  
  

}
