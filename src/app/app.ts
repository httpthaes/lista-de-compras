import { Component, signal } from '@angular/core';
import { ItemLista } from './component/item-lista/item-lista';

@Component({
  imports: [ItemLista],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lista-de-compras');
}
