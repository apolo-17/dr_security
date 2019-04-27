import { Component, OnInit } from '@angular/core';
import {Visita} from '../interfaces/visita';
import {RegistrosService} from '../services/registros.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  visitas: Visita = {
    name: null,
    apellidos: null,
    motivo: null
  };
  id:any;
  editing:boolean = false;
  registros:Visita[];
  constructor(private registrosService: RegistrosService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing = true;
      this.registrosService.get().subscribe( (data:Visita[]) => {
        this.registros = data;
        this.visitas = this.registros.find( (r) => {return r.id == this.id});
        console.log(this.visitas);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit() {
  }
  saveVisita(){
    if (this.editing) {
      this.registrosService.put(this.visitas).subscribe((data) => {
        alert('Visita actualizada!!');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error!! ');
      });
    } else {
      this.registrosService.save(this.visitas).subscribe((data) => {
        alert('Visita registrada!!');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error!! ');
      });
    }
  }
}
