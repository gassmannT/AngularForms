import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-criteria',
  templateUrl: 'filter-criteria.component.html'
})
export class FilterCriteriaComponent implements OnInit {
  private _hitCount: number;
  get hitCount(): number {
    return this._hitCount;
  }
  @Input()
  set hitCount(v: number) {
    this._hitCount = v;
    // Getter / Setter Way
    if (this._hitCount === 0) {
      this.hitCountMessage = 'no employees found.';
    } else {
      this.hitCountMessage = `${this._hitCount} hits`;
    }
  }

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  hitCountMessage: string;

  // Getter / Setter Way
  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(v: string) {
    this._listFilter = v;
    this.valueChange.emit(this._listFilter);
  }

  constructor() {}

  ngOnInit() {}
}
