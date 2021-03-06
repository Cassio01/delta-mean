import {Component, Input, OnInit} from '@angular/core';
import {Localizacao} from "../model/localizacao.model";


@Component({
  selector: 'app-host-panel',
  templateUrl: './host-panel.component.html',
  styleUrls: ['./host-panel.component.css']
})
export class HostPanelComponent implements OnInit {

  @Input()
  localizacao: any = new Localizacao();
  constructor() { }

  ngOnInit() {
  }

}
