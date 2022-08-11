import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  classes = ['list-style'];

  show: boolean = false;
  evento: string = 'abrir';

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show;

    this.evento == 'abrir' ? (this.evento = 'fechar') : (this.evento = 'abrir');
  }
}
