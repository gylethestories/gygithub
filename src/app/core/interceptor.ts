import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  static replaceUrl(url: string): string {
    const isAbsoluteUrl = /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
    // const isLocalAssets = /\/assets+[\S*]+\.json/.test(url);
    const isLocalAssets = /\/assets+[\S*]+/.test(url);
    return isAbsoluteUrl || isLocalAssets ? url : `${environment.bff.apigee}${url}`;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      url: BaseInterceptor.replaceUrl(req.url)
    });
    return next.handle(cloneReq);
  }
}
