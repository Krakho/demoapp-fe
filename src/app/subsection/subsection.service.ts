import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubsectionModel } from './subsection.response';

@Injectable({
  providedIn: 'root'
})
export class SubsectionService {

  constructor(private http: HttpClient) { }

  getAllSubsections(): Observable<Array<SubsectionModel>> {
   return this.http.get<Array<SubsectionModel>>('http://localhost:8080/api/subsection')
  }

  createSubsection(subsectionModel: SubsectionModel): Observable<SubsectionModel> {
    return this.http.post<SubsectionModel>('http://localhost:8080/api/subsection', subsectionModel);
  }
}
