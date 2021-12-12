import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { EnviarSolicitudesComponent } from './enviar-solicitudes/enviar-solicitudes.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { VerificarSolicitudesComponent } from './verificar-solicitudes/verificar-solicitudes.component';
import { VerProductosComponent } from './catalogo/ver-productos/ver-productos.component';


@NgModule({
  declarations: [
    EnviarSolicitudesComponent,
    RealizarPedidoComponent,
    VerificarSolicitudesComponent,
    VerProductosComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
