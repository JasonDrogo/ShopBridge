import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadModalComponent } from './components/upload-modal/upload-modal.component';
import { RouterModule } from '@angular/router';
import { MainServiceService } from 'src/services/main-service.service';
import { MainInterceptor } from 'src/services/main.interceptor';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    UploadModalComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [MainServiceService,{ provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
