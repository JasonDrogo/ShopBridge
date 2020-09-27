import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as  $  from 'jquery';

import { MainServiceService } from 'src/services/main-service.service';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css']
})
export class UploadModalComponent implements OnInit {
item : any={};
show : boolean = true;
  constructor(public dialogRef: MatDialogRef<UploadModalComponent>,public mainService : MainServiceService) { }

  ngOnInit(): void {
    $(".success").prop("disabled", true);
  }
  upload(){
   console.log( this.item);
    this.mainService.uploadItem(this.item).subscribe((success)=>{
      console.log(success);
      this.dialogRef.close();
    })
  }
  
  okPress(): void {
    // this.onClose.next(true);
    this.dialogRef.close();
  }
  readUrl(event:any) {
  this.show = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
      
        this.item.image =  (<FileReader>event.target).result;
        $(".success").prop("disabled", false);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
