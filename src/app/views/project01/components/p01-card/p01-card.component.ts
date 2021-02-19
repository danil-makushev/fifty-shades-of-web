import {
  HostListener,
  Output,
  EventEmitter,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ICardOptions } from '../../models/card-options.interface';

@Component({
  selector: 'app-p01-card',
  templateUrl: './p01-card.component.html',
  styleUrls: ['./p01-card.component.scss'],
  host: { '[class]': 'activeClass' },
})
export class P01CardComponent implements OnInit {
  /** Information that is displayed on cards */
  @Input() cardOptions: ICardOptions;

  @Output()
  public cardClicked = new EventEmitter<boolean>();

  /** Style for dynamic background setting */
  public style;

  /** Attachable 'active' class */
  public activeClass: string = '';

  public ngOnInit() {
    this.style = {
      'background-image': `url("/assets/project-01/${this.cardOptions.imgUrl}")`,
    };
  }

  @HostListener('click', ['$event.target'])
  private onClick() {
    this.cardClicked.emit(true);
  }

  /** Attach 'active' class */
  public activate() {
    this.activeClass = 'active';
  }

  /** Detach 'active' class */
  public deactivate() {
    this.activeClass = '';
  }
}
