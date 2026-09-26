import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lista } from '../../services/lista';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-lista',
  imports: [FormsModule, RouterLink],
  templateUrl: './item-lista.html',
  styleUrl: './item-lista.css',
})

export class ItemLista implements OnInit {
  constructor(public listaService: Lista) { }

    sugestoes: any[] = []; //recebe o resultado da chamada da API

    ngOnInit(): void {
      this.listaService.buscarSugestoes().subscribe({
        next: (data) => this.sugestoes = data, // roda quando a resposta chega e guarda os dados dentro de sugestoes
        error: (error) => console.error('Deu ruim', error),
      });
    }
}
