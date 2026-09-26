import { Routes } from '@angular/router';
import { ItemLista } from './component/item-lista/item-lista';
import { ItemDetalhe } from './component/item-detalhe/item-detalhe';

export const routes: Routes = [
    {path: '', component: ItemLista},
    {path: 'itens/:id', component: ItemDetalhe},
];
