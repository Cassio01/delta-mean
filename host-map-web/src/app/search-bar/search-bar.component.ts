import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Localizacao} from "../model/localizacao.model";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  dominio: String;

  @Output()
  localizacao: EventEmitter<Localizacao> = new EventEmitter<Localizacao>();

  constructor(private httpClient: HttpClientService) {
  }

  ngOnInit() {
  }

  pesquisar(): void {
    this.httpClient
      .get('http://ip-api.com/json/' + this.dominio)
      .subscribe(
        (data) => this.localizacao.emit(data),
        (error) => console.error(error)
      );
  }

}
