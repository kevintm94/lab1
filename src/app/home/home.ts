import { Component } from '@angular/core';
import { Productoservice } from '../core/services/productoservice';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  productos:any[] = [];
  /**
   * 
   */
  constructor(private productoService:Productoservice){
    this.listarProductos();
  }

  listarProductos():void{
    this.productoService.listaProductos().subscribe({
      next:(data)=>{
        this.productos = data
        console.log(this.productos);
      },
      error:(err)=>console.error('error al cargar productos', err)
    })
  }
}
