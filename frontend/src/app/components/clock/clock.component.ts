import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})


export class ClockComponent implements OnInit, OnDestroy {
  currentDateTime: string = '';
  private intervalId: any;

  ngOnInit(): void {
    this.updateDateTime(); // Atualiza a data e hora inicialmente
    this.intervalId = setInterval(() => this.updateDateTime(), 1000); // Atualiza a cada segundo
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Limpa o intervalo ao destruir o componente
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString('pt-BR', {
      weekday: 'long', // Dia da semana
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
}
