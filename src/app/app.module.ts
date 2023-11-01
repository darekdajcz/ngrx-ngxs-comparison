import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from '../ngxs/store/states/user.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { NgxsTableComponent } from './ngxs-table/ngxs-table.component';
import { NgxsAddUserComponent } from './ngxs-add-user/ngxs-add-user.component';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { NgrxAddUserComponent } from './ngrx-add-user/ngrx-add-user.component';
import { NgrxTableComponent } from './ngrx-table/ngrx-table.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../ngrx/store/reducers/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../ngrx/store/effects/user.effects';
import { DragDropModule } from 'primeng/dragdrop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NgxsTableComponent,
    NgxsAddUserComponent,
    NgrxAddUserComponent,
    NgrxTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ngxs
    NgxsModule.forRoot([
      UserState
    ]),

    // ngrx
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),

    ReactiveFormsModule,
    ButtonModule,
    ChipsModule,
    TableModule,
    ToggleButtonModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
