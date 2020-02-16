import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopDto} from '../../shopOwner/shopDTO/shop-dto';
import {ShopService} from '../../shopOwner/shopService/shop.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  shops: ShopDto[] = [];

  constructor(private router: Router, private shopService: ShopService) {

  }

  ngOnInit() {
    this.shopService.getAllShops().subscribe(resp => {
      this.shops = resp;
    });
  }

}
