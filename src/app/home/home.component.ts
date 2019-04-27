import { Component, OnInit } from '@angular/core';
import {RegistrosService} from '../services/registros.service';
import {HttpClient} from '@angular/common/http';
import {Visita} from '../interfaces/visita';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  API_ENDPOINT = 'http://localhost/examen/public/api';
  visitas: Visita[];
  constructor(private registrosService: RegistrosService) {
    this.getRegistros();
   }
   getRegistros(){
     this.registrosService.get().subscribe( (data:Visita[]) => {
       this.visitas = data;
     }, (error) => {
       console.log(error);
       alert('Ocurrio un error');
     });
   }

  ngOnInit() {
  }

  delete(id) {
    if (confirm('Seguro que quieres eliminar este registro ?')) {
      this.registrosService.delete(id).subscribe( (data) => {
        alert('Registro eliminado');
        console.log(data);
        this.getRegistros();
      }, (error) => {
        console.log(error);
      });
    }

  }
}
