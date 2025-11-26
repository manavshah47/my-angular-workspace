import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonHttp} from '../models/person.model';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) { }

  getPerson(personId: string) {
    return this.http.get<Observable<PersonHttp>>(`http://localhost:3000/person/${personId}`);
  }
}
