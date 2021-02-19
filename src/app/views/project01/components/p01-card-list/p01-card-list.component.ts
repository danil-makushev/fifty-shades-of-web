import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  OnDestroy,
} from '@angular/core';
import { ICardOptions } from '../../models/card-options.interface';
import { P01CardComponent } from '../p01-card/p01-card.component';

@Component({
  selector: 'app-p01-card-list',
  templateUrl: './p01-card-list.component.html',
  styleUrls: ['./p01-card-list.component.scss'],
})
export class P01CardListComponent implements AfterViewInit, OnDestroy {
  /** Information that is displayed on cards */
  public cardOptions: ICardOptions[] = [
    { title: 'Awake', imgUrl: '1.jpg' },
    { title: 'Serenity', imgUrl: '2.jpg' },
    { title: 'Balance', imgUrl: '3.jpg' },
    { title: 'Infinity', imgUrl: '4.jpg' },
  ];

  @ViewChildren(P01CardComponent) cards: QueryList<P01CardComponent>;

  /** @ignore */
  public ngAfterViewInit(): void {
    // workaround to avoid "Expression has changed after it was checked" error
    setTimeout(() => {
      this.cards.first.activate();
    });

    this.cards.forEach((el: P01CardComponent) =>
      el.cardClicked.subscribe(() => {
        this.deactivateCards();
        el.activate();
      })
    );
  }

  /** @ignore */
  ngOnDestroy(): void {
    this.cards.forEach((el: P01CardComponent) => {
      el.cardClicked.unsubscribe();
    });
  }

  /** Deactivate all cards */
  private deactivateCards() {
    this.cards.forEach((el: P01CardComponent) => el.deactivate());
  }
}
