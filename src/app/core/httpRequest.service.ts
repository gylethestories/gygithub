import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequest {
  private xmlhttp: XMLHttpRequest;
  private opts: HttpRequestOption;

  constructor() {
    if ((window as any).ActiveXObject) {
      this.xmlhttp = new (window as any).ActiveXObject('Microsoft.XMLHTTP');
    } else if ((window as any).XMLHttpRequest) {
      this.xmlhttp = new XMLHttpRequest();
    } else {
      throw new Error('not http request object can use at current browser.');
    }
  }

  /**
   * 请求主体
   *
   * @returns
   * @memberof HttpRequest
   */
  request(opts: HttpRequestOption): Observable<any> {
    this.opts = opts;
    const type = this.opts.type
      ? this.opts.type.toString().toUpperCase()
      : 'GET';
    const url = this.opts.url;
    const dataType = this.opts.dataType
      ? this.opts.dataType.toString().toUpperCase()
      : 'JSON';
    const data = this.opts.data || {};
    const header = this.opts.header || {};
    const self = this;

    return new Observable(observe => {
      self.xmlhttp.open(type, url, true);
      if (header) {
        const hkarr = Object.keys(header);
        for (const item of hkarr) {
          self.xmlhttp.setRequestHeader(item, header[item]);
        }
      }
      type === 'POST' || 'PUT'
        ? self.xmlhttp.send(JSON.stringify(data))
        : self.xmlhttp.send();
      self.xmlhttp.onreadystatechange = () => {
        if (self.xmlhttp.readyState === 4 && self.xmlhttp.status === 200) {
          observe.next({
            data: self.typeTrans(dataType, self.xmlhttp),
            status: self.xmlhttp.status,
            readyState: self.xmlhttp.readyState
          });
        } else if (
          self.xmlhttp.readyState === 4 &&
          self.xmlhttp.status !== 200
        ) {
          observe.error({
            error: self.xmlhttp.responseText,
            status: self.xmlhttp.status,
            readyState: self.xmlhttp.readyState
          });
        }
      };
    });
  }

  /**
   * 将传入的对象参数转化为url格式字符串
   *
   * @param {*} obj
   * @returns
   * @memberof HttpRequest
   */
  obj2url(obj: any) {
    if (!obj) {
      return '';
    }
    let url = '';
    Object.keys(obj).forEach(u => {
      url += `${u}=${obj[u]}&`;
    });
    url = url.substring(0, url.length - 2);
    return url;
  }
  /**
   * 匹配当前xmlhttp返回内容的类型，并对应输出内容，默认为text
   *
   * @param {string} type
   * @param {XMLHttpRequest} xmlhttp
   * @memberof HttpRequest
   */
  typeTrans(type: string, xmlhttp: XMLHttpRequest) {
    type = type.toUpperCase() || 'TEXT';
    switch (type) {
      case 'TEXT':
        return this.typeText(xmlhttp);
        break;
      case 'JSON':
        return this.typeJson(xmlhttp);
        break;
      case 'XML':
        return this.typeXml(xmlhttp);
        break;
      case 'BLOB':
        return this.typeBlob(xmlhttp);
        break;
      case 'ARRAYBUFFER':
        return this.typeArraybuffer(xmlhttp);
        break;

      default:
        return this.typeText(xmlhttp);
        break;
    }
  }
  /**
   * 将返回文字转换为字符串类型
   *
   * @param {XMLHttpRequest} xmlhttp
   * @returns
   * @memberof HttpRequest
   */
  typeText(xmlhttp: XMLHttpRequest) {
    return xmlhttp.responseText ? xmlhttp.responseText.toString() : '';
  }
  /**
   * 将返回文字转换为JSON类型
   *
   * @param {XMLHttpRequest} xmlhttp
   * @returns
   * @memberof HttpRequest
   */
  typeJson(xmlhttp: XMLHttpRequest) {
    return xmlhttp.response ? JSON.parse(xmlhttp.response) : {};
  }
  /**
   * 将返回文字转换为XML类型
   *
   * @param {XMLHttpRequest} xmlhttp
   * @returns
   * @memberof HttpRequest
   */
  typeXml(xmlhttp: XMLHttpRequest) {
    return xmlhttp.responseXML ? xmlhttp.responseXML : '';
  }
  /**
   * 将返回文字转换为Blob类型
   *
   * @param {XMLHttpRequest} xmlhttp
   * @returns
   * @memberof HttpRequest
   */
  typeBlob(xmlhttp: XMLHttpRequest) {
    if (
      xmlhttp.responseText &&
      xmlhttp.responseText.indexOf('[') === 0 &&
      xmlhttp.responseText.indexOf(']') === xmlhttp.responseText.length - 1
    ) {
      return new Blob([xmlhttp.responseText], { type: 'text/plain' });
    } else {
      return new Blob([xmlhttp.responseText], { type: 'text/plain' });
    }
  }
  /**
   * 将返回文字转换为ArrayBuffer类型
   *
   * @param {XMLHttpRequest} xmlhttp
   * @returns
   * @memberof HttpRequest
   */
  typeArraybuffer(xmlhttp: XMLHttpRequest) {
    return xmlhttp.responseText.length > 0
      ? new ArrayBuffer(xmlhttp.responseText.length)
      : new ArrayBuffer(0);
  }
}
