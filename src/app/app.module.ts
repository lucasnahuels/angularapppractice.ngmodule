import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCreate } from './components/person/person-create/person-create.component';
import { PersonList } from './components/person/person-list/person-list.component';
import { PersonEdit } from './components/person/person-edit/person-edit.component';
import { PersonDelete } from './components/person/person-delete/person-delete.component';
import { PersonService } from './services/person-service';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './pipes/gender.pipe';
import { CardComponent } from './components/card/card.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { PersonDetail } from './components/person/person-detail/person-detail.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { notificationReducer } from './notifications/reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NotificationComponent } from './components/notification/notification.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCreate,
    PersonList,
    PersonEdit,
    PersonDelete,
    PersonDetail,
    ModalComponent,
    CardComponent,
    LoginComponent,
    WeatherComponent,
    NotificationComponent,
    GenderPipe,
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule, // for ModalComponent
    //The next three imports are for NgRx notifications
    StoreModule.forRoot({ notifications: notificationReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    PersonService,
    { provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true 
    },
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
