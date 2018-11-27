import { Component, OnInit } from '@angular/core';
import {CardListService} from '../card-list.service';
import {Card} from '../card';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  cardList;
  constructor(private cardListService: CardListService) { }
  getCards(): void {

      this.cardListService.getCardList().subscribe(data => this.cardList = data['card_set'].card_list);

  }
  ngOnInit() {
      this.getCards();
  }

}
