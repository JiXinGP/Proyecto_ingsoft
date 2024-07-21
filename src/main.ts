import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    // No es necesario proporcionar RouterModule.forRoot aquí
    // AppRoutingModule es suficiente si lo configuras en tu AppModule
  ]
});
