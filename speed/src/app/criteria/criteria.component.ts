import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {
  @Output() public selection = new EventEmitter<string>();
  public options = ['Agencias', 'Estados', 'Tipos'];
  constructor() { }

  ngOnInit() {
  }
  public radioChange(e) {
    this.selection.next(e.value);
  }

}
