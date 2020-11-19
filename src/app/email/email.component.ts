import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    to:"",
    subject:"",
    message:""
  }

  constructor(private snack:MatSnackBar, private email:EmailService) { }

  ngOnInit(): void {
  }

  flag:boolean=false;

  doSubmitForm(){
    console.log("trying to submit form");
    console.log("data ",this.data);

    if(this.data.to=='' || this.data.subject=='' || this.data.message==''){
      this.snack.open("fields can not be empty !!","ok");
    }
    
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{

        console.log(response);
        this.flag=false;

        this.snack.open("Send Success","ok");

      },
      error=>{

        console.log(error);
        this.flag=false;
        this.snack.open("ERROR!!","ok");
        
      }
    )

  }

}