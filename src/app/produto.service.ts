import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos";

  constructor(private _httpClient: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url)
  }
}
