import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
