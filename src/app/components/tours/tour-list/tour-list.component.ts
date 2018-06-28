import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http,
  Response,
  Headers,
  RequestOptions
} from "@angular/http";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  tourLists: [Object];
  constructor(private http: Http) {
    let access_token = localStorage.getItem('access_token');
    let headers = new Headers({
      'access_token': access_token
    });
    let options = new RequestOptions({
      headers: headers
    });
    let url = 'http://162.243.14.158:8080/tours?company=' + localStorage.getItem('userId');
    // this.http.get(url, options).map((res: Response) => res.json()).subscribe(data => {
    //   this.handleListTour(data.data)
    // }, error => {
    //   console.log(error)
    // });
  }

  ngOnInit() {}
  private handleListTour(tour) {
    this.tourLists = tour;
  }

}
