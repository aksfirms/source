import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  data = {};
  ngOnInit() {
    this.apiService.get().subscribe((data: any) => {
         this.data = data;
    })
    this.apiService.addNewUser();
  }
}
