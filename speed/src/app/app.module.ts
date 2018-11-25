import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CriteriaComponent } from './criteria/criteria.component';
import { ListResultComponent } from './list-result/list-result.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCriteriaComponent } from './list-criteria/list-criteria.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AgencyEffects } from './store/agency/agency.effects';
import { LaunchEffects } from './store/launch/launch.effects';
import { StatusEffects } from './store/status/status.effects';
import { TypeEffects } from './store/type/type.effects';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CriteriaComponent,
    ListResultComponent,
    ListCriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AgencyEffects, StatusEffects, TypeEffects, LaunchEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
