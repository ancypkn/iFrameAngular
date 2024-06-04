import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'child'; // Set the title for the component

  movieInfo: any; // Declare a variable to store movie information
  dataList: any = []; // Initialize an empty array to store data recieved from parent application

  // Listen for messages from the parent application
  ngOnInit() {
    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:4200') {
        // Handle data received from the parent application
        this.movieInfo = event.data; // Store the received movie data
        this.dataList = Object.keys(this.movieInfo); // Create an array of keys from the movie data
        console.log(this.dataList, 'lst'); // Log the list of keys to the console
      }
    });

  }
}

