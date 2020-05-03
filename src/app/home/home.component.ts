import { Component, OnInit } from '@angular/core';
// import fade in animation
import { fadeInAnimation } from '../animations/animations.component';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   // make fade in animation available to this component
   animations: [fadeInAnimation],
   // attach the fade in animation to the host (root) element of this component
   host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  public i = 0;
  public txt = 'Motlaekakwena offer best services to all government and private sector.';
  public speed = 50;
  public startAgain = false;
  public showFirstSlide = true;

  constructor() { }

  ngOnInit() {
    this.typeWriter();
    setTimeout(() => {
      this.img1Animation();
    }, 90);
  }
 
  typeWriter() {    
    if (this.i < this.txt.length) {
      document.getElementById("demo").innerHTML += this.txt.charAt(this.i);
      this.i++;
      setTimeout(() => {
     // setTimeout(this.typeWriter, this.speed);
      this.typeWriter();
    }, 90);
    }
  }

  img1Animation(){
    document.getElementById("zoomimg").style.height = '700px';
    document.getElementById("zoomimg").style.width = '1659px';
    document.getElementById("zoomimg").style.transition = "all 5s ease";
    setTimeout(() => {
     
      this.img1Animation();
   }, 5000);
  }

  playSlide(){
    this.showFirstSlide = !this.showFirstSlide;
  }

}
