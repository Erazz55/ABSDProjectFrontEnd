import { Component, OnInit } from '@angular/core';
import {Item} from '../shopDTO/item';
import {ItemService} from '../shopService/item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  items: Item[] = [];
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  goToAddItem() {
    this.router.navigate(['/addItem']);
  }
  goToDeleteItem() {
    this.router.navigate(['/deleteItem']);
  }

  goToProfile(){
    this.router.navigate(['/shopOwnerDashbord']);
  }

}
