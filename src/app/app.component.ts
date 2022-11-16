import {Component, OnInit} from '@angular/core';
import {IProduct} from "./settings/interfaces/iproduct";
import {ApiService} from "./settings/services/api.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "./settings/services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public products: IProduct[];
  // public products$!:Observable<IProduct[]>
  public loading: boolean;
  public search: string;

  constructor(public apiServ: ApiService, public modalServ:ModalService) {
    this.products = [];
    this.loading = false;
    this.search = '';
  }

  ngOnInit(): void {
    this.loading = true;
    this.getPosts();
    // this.products$ = this.apiServ.getAall().pipe(
    //   tap(()=> this.loading = false)
    // )

  }

  getPosts(): void {
    this.apiServ.getAall().subscribe({
      next: (res) => {
        // this.products = res;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        alert('Возникли проблемы с сервером!!!');
      }
    })
  }

}
