import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PainelComponent } from "./components/painel/painel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PainelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'novo-portal-atendimento';
}
