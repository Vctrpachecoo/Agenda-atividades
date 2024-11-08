import { Component, OnInit} from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { ProcessosService, Processo } from '../../services/processos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [ClockComponent, CommonModule,],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss',
  
})
export class PainelComponent implements OnInit{
  processos: Processo[] = [];

  constructor(private processosService: ProcessosService) {}

  ngOnInit() {
    this.processosService.getProcessos().subscribe(data => {
      this.processos = data;
    });
  }
} 
