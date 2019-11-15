import { Injectable, EventEmitter } from '@angular/core';
import { HttpRequest } from './httpRequest.service';
@Injectable({
  providedIn: 'root'
})
export class LangService {
  lang = sessionStorage.getItem('lang') || 'en';
  langChange: EventEmitter<any> = new EventEmitter();
  originLang = {};
  langData: any;
  constructor(private http: HttpRequest) {
    this.getLangData(this.lang);
  }
  _keySplit(expression: string, obj: object) {
    const arr = expression.split('.');
    const error: boolean = arr.includes('');
    if (error) {
      document.body.innerHTML = '<!--------->';
      throw new Error(`Format error, Cannot read property ${expression}`);
    }
    for (let i = 0, len = arr.length; i < len; i++) {
      if (typeof obj[arr[i]] === 'object') {
        obj = obj[arr[i]];
      } else if (typeof obj[arr[i]] === 'undefined') {
        if (i < len - 1) {
          document.body.innerHTML = '<!--------->';
          throw new TypeError(
            'Cannot read property ' + arr[i + 1] + ' of undefined'
          );
        }
      } else {
        obj = obj[arr[i]];
        if (i < len - 1) {
          document.body.innerHTML = '<!--------->';
          throw new TypeError(`Cannot read property ${arr[i + 1]} of '${obj}'`);
        }
      }
    }
    return obj;
  }
  getLangData(langkey: string) {
    this.http
      .request({ url: `/assets/${langkey}-lang.json` })
      .subscribe(lang => {
        this.originLang[langkey] = lang.data;
        this.langData = lang.data;
        this.langChange.emit({ lang: this.lang, translations: lang.data });
      });
  }
  onLangChange() {
    this.langChange.emit();
  }
  setLang(newLang: string) {
    if (this.lang !== newLang) {
      this.lang = newLang;
      if (!this.originLang[newLang]) {
        this.getLangData(this.lang);
      } else {
        this.langData = this.originLang[newLang];
      }
    }
  }
  get(key: string): any {
    return this._keySplit(key, this.langData);
  }
}
