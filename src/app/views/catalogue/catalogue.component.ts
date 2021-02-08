import { Component, OnInit } from '@angular/core';
import { INavLink } from '../../models/nav-link.interface';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  constructor() {}

  /** Navigation links for projects */
  public projects: INavLink[] = [];
  /** Number of projects. New links generated automatically. */
  private projectCount = 1;

  ngOnInit(): void {
    for (let i = 1; i <= this.projectCount; i++) {
      this.projects.push({
        name: `Project ${this.normalizeCount(i)}`,
        link: `project-${this.normalizeCount(i)}`,
      });
    }
    console.log(this.projects);
  }

  /** Format project number to 2 digits */
  private normalizeCount(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }
}
