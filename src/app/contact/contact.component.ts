import { Component, OnInit } from '@angular/core';
import { RequestOptions, URLSearchParams, Headers, Http, } from '@angular/http';
import { HttpParams } from "@angular/common/http";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

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
  constructor(private http : Http, public httpClient : HttpClient) { }

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
    
    let body = new URLSearchParams();
  body.set('email', this.msg.email);
  body.set('name', this.msg.name );
  body.set('message', this.msg.msg);
  body.set('subject', this.msg.subject);

  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  let options = new RequestOptions({ headers: headers, params: this.msg });
  let params = new HttpParams();
    params = params.append('email', this.msg.email);
    params = params.append('message', this.msg.msg);

  let endpoint = "../assets/php/mail.php";

    this.http.post(endpoint, this.msg, options).subscribe(response => {
      this.isSent = true;
    });
  }
}
