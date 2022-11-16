import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public erorr$:Subject<string>;

  constructor() {
    this.erorr$ = new Subject<string>();

  }

  handler(message:string){
    this.erorr$.next(message);
  }

  clear(){
    this.erorr$.next('');
  }

}
