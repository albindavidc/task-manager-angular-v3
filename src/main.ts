import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthService } from './app/auth/auth.service';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    AuthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
