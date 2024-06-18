import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-view',
  templateUrl: './analytics-view.component.html',
  styleUrl: './analytics-view.component.css'
})
export class AnalyticsViewComponent implements OnInit{
  is_user_authenticated = true;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 constructor(){

 }
}
