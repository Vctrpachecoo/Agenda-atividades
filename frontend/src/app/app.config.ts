import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

  // Define os provedores de serviços que serão utilizados pela aplicação
  providers: [

    // Fornece o cliente HTTP para a aplicação
    provideHttpClient(),

    // Configura a detecção de mudanças para ser mais eficiente, reduzindo eventos desnecessários
    provideZoneChangeDetection({ eventCoalescing: true }), 

    // Fornece o serviço de roteamento utilizando as rotas definidas
    provideRouter(routes)
    
  ],
};