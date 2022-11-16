import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { ServerErrorComponent } from './components/server-error/server-error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchPipe } from './settings/pipes/search.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ServerErrorComponent,
    SearchPipe,
    ModalComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
