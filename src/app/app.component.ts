import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = '../assets/Bridgelabz Logo.jpeg'

  ngOnInit(): void {
    this.title = "Hello From Bridgelabz"
  }
}