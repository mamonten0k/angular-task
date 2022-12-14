import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title: string;
  @Input() text: string;
}
