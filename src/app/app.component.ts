import { Component } from '@angular/core';

export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  flag = true

  cards: Card[] = [
    {title: 'Card 1', text: 'This is card number 1'},
    {title: 'Card 2', text: 'This is card number 2'},
    {title: 'Last Card', text: 'This is card number 3'}
  ]

  toggleCards() {
    this.flag = !this.flag
  }
}
