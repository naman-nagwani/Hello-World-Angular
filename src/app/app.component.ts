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
  nameError: string ="";

  ngOnInit(): void {
    this.title = "Hello From Bridgelabz"
  }

  onClick($event: any) {
    console.log("Image has been clicked",$event);
    window.open(this.url,"_blank");
  }


  onInput($event: any) {
    console.log("Change Event Occurred!",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!"
  }

}