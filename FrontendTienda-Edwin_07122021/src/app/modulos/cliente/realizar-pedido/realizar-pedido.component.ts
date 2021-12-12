import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent implements OnInit {

  listadoRegistros: ModeloProducto[] = [];

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }

  ObtenerListadoProductos(){
    this.productoServicio.ObtenerRegistros().subscribe((datos:ModeloProducto[]) => {
      this.listadoRegistros = datos;
    })
  }
}
