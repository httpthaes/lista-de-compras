import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Lista } from '../../services/lista';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterLink, CommonModule],
  selector: 'app-item-detalhe',
  styleUrl: './item-detalhe.css',
  templateUrl: './item-detalhe.html',
})
export class ItemDetalhe {

  produto: any = null;

  constructor(
    private route: ActivatedRoute,
    private listaService: Lista,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    // snapshot tira uma "foto" da rota atual e paramMap procura o valor do id nessa rota

    if (id) {
      this.listaService.buscarProdutoPorId(Number(id)).subscribe({
        next: (dados) => {
          console.log('Produto recebido:', dados);
          this.produto = dados;
          console.log('Produto depois de atribuir:', this.produto);
        },
        error: (erro) => console.error('Deu ruim:', erro),
      });
    }
  }
}
