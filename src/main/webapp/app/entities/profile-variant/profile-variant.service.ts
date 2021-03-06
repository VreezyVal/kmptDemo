import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IProfileVariant } from 'app/shared/model/profile-variant.model';

type EntityResponseType = HttpResponse<IProfileVariant>;
type EntityArrayResponseType = HttpResponse<IProfileVariant[]>;

@Injectable({ providedIn: 'root' })
export class ProfileVariantService {
  public resourceUrl = SERVER_API_URL + 'api/profile-variants';

  constructor(protected http: HttpClient) {}

  create(profileVariant: IProfileVariant): Observable<EntityResponseType> {
    return this.http.post<IProfileVariant>(this.resourceUrl, profileVariant, { observe: 'response' });
  }

  update(profileVariant: IProfileVariant): Observable<EntityResponseType> {
    return this.http.put<IProfileVariant>(this.resourceUrl, profileVariant, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProfileVariant>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProfileVariant[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
