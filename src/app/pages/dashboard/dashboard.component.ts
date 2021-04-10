import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bannerImg = "assets/images/banner-image.lg.jpg";
  searchText: string = '';

  constructor() { }

  ngOnInit(): void { }

  inputChanged(value: string): void {
    this.searchText = value;
  }
}
