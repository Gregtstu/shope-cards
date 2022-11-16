import { Component, OnInit } from '@angular/core';
import {ErrorService} from "../../settings/services/error.service";

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

  constructor(public errorServ:ErrorService) { }

  ngOnInit(): void {
  }

}
