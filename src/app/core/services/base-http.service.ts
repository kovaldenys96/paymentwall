import { Inject, Injectable } from '@angular/core';
import { API_CONFIG } from '../injection-tokens';
import { HttpClient, HttpEventType, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { EnvironmentApiConfig } from '../models/environment.model';
import { RequestOptions } from '../models/request-options.model';
import { Observable } from 'rxjs';
import * as UriTemplate from 'uri-templates';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class BaseHttpService {

  constructor(
    @Inject(API_CONFIG) protected apiConfig: EnvironmentApiConfig,
    protected http: HttpClient,
  ) {}

  /**
   * Method for isolate logic for requests and describe all requests inside of environment
   * @typeParam I   queryParams for GET request or body for the rest
   * @typeParam O   response type
   */
  makeRequest<I, O>(options: RequestOptions, data?: {}): Observable<HttpResponse<O>> {
    const uriTemplate = UriTemplate(options.uri);
    const url = uriTemplate.fillFromObject(data);
    const init = { responseType: options.responseType, params: undefined };

    let body;

    if (options.method === 'GET') {
      init.params = new HttpParams({ fromObject: data });
    } else {
      body = data;
    }

    const request = new HttpRequest<I>(options.method, url, body, init);

    return this.http.request<O>(request).pipe(
      filter(res => res.type === HttpEventType.Response),
      map((res: HttpResponse<O>) => res),
    );
  }

}
