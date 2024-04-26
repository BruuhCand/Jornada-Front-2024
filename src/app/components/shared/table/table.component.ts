import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatTableModule} from '@angular/material/table';




@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() dataSource: any[];
  @Input() displayedColumns: string[];

}
