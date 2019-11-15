import { environment } from './../../environments/environment';
import { BaseInterceptor } from './interceptor';
import { HttpRequest } from '@angular/common/http';

describe('BaseInterceptor', () => {
  let interceptor: BaseInterceptor;
  beforeEach(() => {
    interceptor = new BaseInterceptor();
  });

  it('should clone a new request', () => {
    const request = new HttpRequest('GET', 'test');
    const spyNext = jasmine.createSpyObj('next', ['handle']);
    interceptor.intercept(request, spyNext);
    expect(spyNext.handle).toHaveBeenCalledWith(
      request.clone({
        url: BaseInterceptor.replaceUrl(request.url)
      })
    );
  });

  it('should handle url correctly', () => {
    expect(BaseInterceptor.replaceUrl('/test')).toEqual(`${environment.bff.apigee}/test`);
    expect(BaseInterceptor.replaceUrl('http://test')).toEqual(`http://test`);
    expect(BaseInterceptor.replaceUrl('/assets/i18n/en.json')).toEqual(`/assets/i18n/en.json`);
  });
});
