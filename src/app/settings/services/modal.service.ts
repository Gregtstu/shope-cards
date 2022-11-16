import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isVisibleModal$ : BehaviorSubject<boolean>;
  constructor() {
    this.isVisibleModal$ = new BehaviorSubject<boolean>(false);
  }

  open(){
    this.isVisibleModal$.next(true);
  }

  close(){
    this.isVisibleModal$.next(false);
  }

}
