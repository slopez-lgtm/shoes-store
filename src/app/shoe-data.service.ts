import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoe } from './shoe-list/Shoe';


const URL = 'https://6a5a64b1ad8332e75f027885.mockapi.io/shoes/items'; 

@Injectable({
  providedIn: 'root'
})
export class ShoeDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Shoe[]> {
    return this.http.get<Shoe[]>(URL);
  }
}