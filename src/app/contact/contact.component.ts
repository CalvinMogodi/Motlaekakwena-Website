import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public error: boolean = false;
  public isSent: boolean = false;
  public required: boolean = false;
  public msg = {
    name: undefined,
    email: undefined,
    subject: undefined,
    msg: undefined,
  };
  constructor() { }

  ngOnInit() { 
  }

  sendemail() {
    this.error = false;
    this.isSent = false;
    this.required = false;

    if(this.msg.name == '' || this.msg.name == undefined)
    {
      this.required = true;
      return;
    }

    if(this.msg.msg == '' || this.msg.msg == undefined)
    {
      this.required = true;
      return;
    }

    if(this.msg.subject == '' || this.msg.subject == undefined)
    {
      this.required = true;
      return;
    }

    if(this.msg.email == '' || this.msg.email == undefined)
    {
      this.required = true;
      return;
    }
    
    this.isSent = true;

  }

}
