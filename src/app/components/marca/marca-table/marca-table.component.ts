import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from '../../shared/table/table.component';
import { MarcaInterface } from '../../../models/marca';
import { MarcaService } from '../../../services/marca.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-marca-table',
  standalone: true,
  imports: [MatTableModule, TableComponent, MatButtonModule, RouterModule, RouterOutlet],
  providers: [MarcaService],
  templateUrl: './marca-table.component.html',
  styleUrl: './marca-table.component.css'
})
export class MarcaTableComponent implements OnInit{
  ELEMENT_DATA: MarcaInterface[] = []

  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'telefone'];
  dataSource: any;


  constructor(private service: MarcaService){
  }

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe({
      next: (valor) =>{
        this.ELEMENT_DATA = valor
        this.dataSource = valor
        
      },
      error: () =>{
        this.dataSource = this.ELEMENT_DATA
      }
    })
  }

  
}
