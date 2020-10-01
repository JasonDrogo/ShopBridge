import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { MainServiceService } from './main-service.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private mainService : MainServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      finalize(() =>{
       NavbarComponent.prototype.length = this.mainService.cartData.length })
    );
  }
}
