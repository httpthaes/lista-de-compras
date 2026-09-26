import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Lista {

    constructor(private http: HttpClient) {}
    
    itens = [
        { nome: 'Arroz 5kg', quantidade: 1, comprado: false },
        { nome: 'Feijão 2kg', quantidade: 3, comprado: false },
        { nome: 'Laranja', quantidade: 6, comprado: true },
        { nome: 'Leite Integral 1l', quantidade: 4, comprado: false }
    ];

    novoItem = '';
    quantidade = 0;

    marcarComprado(item: any) {
        console.log("Clicou no botão");
        console.log(item);
        item.comprado = !item.comprado;
    }

    adicionarItem() {
        this.itens.push({
        nome: this.novoItem,
        quantidade: this.quantidade,
        comprado: false
        });

        this.novoItem = '';
        this.quantidade = 0;
    }

    buscarSugestoes() {
        return this.http.get<any[]>('https://fakestoreapi.com/products/') // requisição http
        // metodo GET para receber resposta
        // o "any[]" é opcional, serve para avisar o TS que vai receber uma lista '[]' de qualquer coisa 'any'
        // return vai devolver o resultado da ligação para a api
    }
}
