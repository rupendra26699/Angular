import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  disp: any;
  constructor(private http : HttpClient)
  {

  }

  
  ngOnInit()
  {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments' ).subscribe((res)=> {
      this.data = res; 
      console.log(this.data);     
    })
  }

  show(i: any)
  {
    this.disp = "Id : " + i.id  +" , " + "Name : " + i.name  +" , " + "Email : " + i.email  +" , " + "Body : " + i.body;    
  }
 
  
            
  }


