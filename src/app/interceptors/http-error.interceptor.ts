import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, retryWhen, tap, delayWhen, mergeMap, delay, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

export class HttpErrorInterceptor implements HttpInterceptor {
      
  constructor(public router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = 'Pug goes woof woof';
                    if (error.error instanceof ErrorEvent) {
                        // Client-side error
                        errorMessage = error.error.message;
                    } else {
                        // Server-side error
                        switch (error.status) {
                            case 0:
                                // Unknowen error
                                this.router.navigate(['/error', "0"]);
                                break;
                            case 401:
                                // Auth error
                                // We would want to attempt to refreash the token and retry the request then send them to login.
                                this.router.navigate(["/error", "401"]);
                                break;
                            case 403:
                                // Forbidden
                                this.router.navigate(["/error", "403"]);
                                break;
                            case 404:
                                // Not found
                                this.router.navigate(["/error", "404"]);
                                break;
                            case 418:
                                // Tea pot
                                this.router.navigate(["/error", "418"]);
                                break;
                            case 500:
                                // Server error
                                this.router.navigate(["/error", "500"]);
                                break;
                        }
                    }
                    return throwError(errorMessage);
                })
            )
    }
}
