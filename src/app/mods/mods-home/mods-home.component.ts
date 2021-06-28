import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title:'Why is the sky blue?',content:'The sky is blue because it is'},
    {title:'What does an orange taste like?',content:'An orange tastes like an orange'},
    {title:'Why Angular is great?',content:'Because it is made by Google'},
  ]
  constructor() {}

  ngOnInit(): void {}

  /**
   * toggles the visibility of the modal component
   * @returns Void
   * 
   */
  onClick():void {
    this.modalOpen = !this.modalOpen;
  }
}
