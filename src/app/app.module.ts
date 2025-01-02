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

@NgModule({
  declarations: [
    AppComponent,
    PersonCreate,
    PersonList,
    PersonEdit,
    PersonDelete,
    GenderPipe,
    CardComponent,
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
