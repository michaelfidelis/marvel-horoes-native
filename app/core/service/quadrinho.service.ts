import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5'
import { ComicData } from '../model/marvel';
import { Comic } from '../model/marvel/';
import 'rxjs/add/operator/map';

@Injectable()
export class QuadrinhoService {

  private PUBLIC_KEY: string = "dc005bd4fe7429cdfccbcfc756e79b7f";
  private PRIVATE_KEY: string = "ec38d937988d5aedbea7b427414388679ec4d6da";
  private BASE_URL: string = "https://gateway.marvel.com:443/v1/public"

  constructor(private http: HttpClient) { }

  obterQuadrinhos(titulo: string = undefined, limit:number = 20, offset: number = 0): Observable<ComicData> {
    const timestamp: number = Date.now();
    const hash: string = Md5.hashStr(timestamp + this.PRIVATE_KEY + this.PUBLIC_KEY).toString();
    let params = new HttpParams()
        .set('limit', String(limit))
        .set('offset', String(offset))
        .set('ts', String(timestamp))
        .set('hash', String(hash))
        .set('apikey', String(this.PUBLIC_KEY));
        
        
        if (titulo) {
            params = params.set('titleStartsWith', titulo);
        }


    return this.http.get<ComicData>(`${this.BASE_URL}/comics`, {params: params});
}

  obterQuadrinho(codigo: number): Observable<Comic> {
    const timestamp: number = Date.now();
    const hash: string = Md5.hashStr(timestamp + this.PRIVATE_KEY + this.PUBLIC_KEY).toString();
    return this.http.get<ComicData>(`${this.BASE_URL}/comics/${codigo}&ts=${timestamp}&hash=${hash}&apikey=${this.PUBLIC_KEY}`).map(result => {
        return result.data.count > 0 ? result.data.results[0] : undefined;
    });
}


} 