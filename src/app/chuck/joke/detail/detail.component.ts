import { Component, Input } from '@angular/core';
import { Joke } from '../../joke';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  @Input()
  joke?: Joke | null;

  constructor() {}
}
