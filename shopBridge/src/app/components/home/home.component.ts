import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainServiceService } from 'src/services/main-service.service';
import { UploadModalComponent } from '../upload-modal/upload-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any[];
  constructor(private _mainService : MainServiceService, private dialog : MatDialog) { }

  ngOnInit(): void {
this.getAllitems();
  }
  getAllitems(){
    this._mainService.getAllItems().subscribe((data)=>{
      this.data = data;
    })
  }


  upload(){  
const dialogRef = this.dialog.open(UploadModalComponent, {
  // width: '250px',
   data: { }
});

dialogRef.afterClosed().subscribe(result => {

  this.getAllitems();
  // this.animal = result;
});
  }
}
