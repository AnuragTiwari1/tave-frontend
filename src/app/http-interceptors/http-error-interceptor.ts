import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  prettyErrorMessage =
    'Opps there seems to be some error. Please try again after some time';

  constructor(private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `${error.error.message || error.message}`;
        }
        switch (error.status) {
          case 400:
            this.toastr.error(
              error.error.message || this.prettyErrorMessage,
              error.statusText
            );
            break;
          case 500:
            this.toastr.error(this.prettyErrorMessage);
        }

        return throwError(errorMessage);
      })
    );
  }
}
