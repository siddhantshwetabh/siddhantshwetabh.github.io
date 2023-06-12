import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  ngOnInit() {
    var i = 0;
    var txt = 'I am a skilled web developer with expertise in HTML, CSS, and Typescript, dedicated to create dynamic and responsive websites that enhance the user experience. My passion for clean design and attention to detail ensure that my clients receive the best possible solutions for their needs.'; /* The text */
    var speed = 35; /* The speed/duration of the effect in milliseconds */
    var xyz:HTMLElement= document.getElementById("demo")!
    typeWriter();
    function typeWriter() {
      if (i < txt.length) {
        xyz.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  }
}
