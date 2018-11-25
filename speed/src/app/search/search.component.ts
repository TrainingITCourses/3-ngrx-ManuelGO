import { State } from './../store/index';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LoadAgencies } from '../store/agency/agency.actions';
import { LoadLaunches } from '../store/launch/launch.actions';
import { LoadTypes } from '../store/type/type.actions';
import { LoadStatuses } from '../store/status/status.actions';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  criterias$: Observable<any>;
  filtered$: Observable<any>;

  selection: string;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.getData();
  }
  onSelection(selection) {
  this.selection = selection;
  switch (this.selection) {
    case 'Agencias':
      this.criterias$ = this.store.select('agency').pipe(
        map(agencies => agencies.agencies)
      );
      break;
    case 'Estados':
    this.criterias$ = this.store.select('status').pipe(
      map(statuses => statuses.statuses)
    );
      break;
    case 'Tipos':
    this.criterias$ = this.store.select('type').pipe(
      map(types => types.types)
    );
      break;
  }
  }
  onCriteriaSelection = e => {
    this.getFilteredResults(e);
  }

 getFilteredResults = (e) => {
  switch (this.selection) {
    case 'Agencias':
      this.filterByAgency(e);
      break;
    case 'Estados':
      this.filterByStatus(e);
      break;
    case 'Tipos':
      this.filterByTypes(e);
      break;
  }
 }
 // res.filter(l => l.status === e.id)
 filterByStatus = (e: any) => {
  this.filtered$ = this.store.select('launch').pipe(
    map((res: any) => res.launches.filter(l => l.status === e.id))
  );
 }
 filterByAgency = (e: any) => {
  this.filtered$ = this.store.select('launch').pipe(
    map((res: any) => res.launches.filter(l => {
      if (l.lsp) {
        return l.lsp.id === e.id;
      }
    }))
  );
 }
 filterByTypes = (e: any) => {
  this.filtered$ = this.store.select('launch').pipe(
    map((res: any) => res.launches.filter(l => {
      if (l.missions[0]) {
        return l.missions[0].type === e.id;
      }
    }))
  );
 }
 getData = () => {
  this.store.dispatch(new LoadAgencies());
  this.store.dispatch(new LoadLaunches());
  this.store.dispatch(new LoadTypes());
  this.store.dispatch(new LoadStatuses());
 }

}



