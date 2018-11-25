import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list-criteria',
  templateUrl: './list-criteria.component.html',
  styleUrls: ['./list-criteria.component.css']
})
export class ListCriteriaComponent implements OnInit {
  @Input() public list;
  @Output() public criteriaSelection = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  public radioChange = e => (this.criteriaSelection.next(e.value));

}
