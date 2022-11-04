import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = '../assets/Bridgelabz Logo.jpeg';
  url = "https://www.bridgelabz.com";

  userName: string ="";

  ngOnInit(): void {
    this.title = "Hello From Bridgelabz"
  }

  onClick($event: any) {
    console.log("Image has been clicked",$event);
    window.open(this.url,"_blank");
  }

}