import { Component } from '@angular/core';
import { AppService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: AppService) { }


  searchTerm='' ;//stores the searched text 
  movieInfo:any;


  ngOnInit() {
    
  }

  //method to get the date based on search
  getData(){
    this.apiService.getData(this.searchTerm).subscribe((data:any)=>{
      this.movieInfo = data
      this.sendDataToChild(data);
    });
  }


  //method to pass data to the child application
  //postMessage is used to share the data to child App
  sendDataToChild(data:any){
      const iframe = document.getElementById('childIframe') as HTMLIFrameElement;
      //iframe is running on the port 4201,hence passing data to bellow url
      iframe.contentWindow?.postMessage(data, 'http://localhost:4201');
  }
}
