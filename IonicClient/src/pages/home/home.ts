import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs/Observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  result: Observable<any>;
  name: String;
  address: String;

  constructor(private http: HttpClient) {}

  getVenue() {
    let url = 'http://127.0.0.1:8081/getplace'
    this.result = this.http.get(url);
    this.result
    .subscribe(data => {
      this.name = data['venue'][0]['name'];
      this.address = data['venue'][0]['address'];
    }, error => {
      console.log(error);
    });
  }
}
