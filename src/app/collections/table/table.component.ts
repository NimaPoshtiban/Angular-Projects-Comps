import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // adding custom style to table
  @Input('class') classNames = '';
  
  @Input() data:{name:string,age:number,job:string}[] = [];
  @Input() headers:{key:string,label:string}[] = [];
  constructor() {}

  ngOnInit(): void {}
}
