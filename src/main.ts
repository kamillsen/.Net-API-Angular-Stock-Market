  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideHttpClient, withFetch } from '@angular/common/http';
  import { appConfig } from './app/app.config';
  import { AppComponent } from './app/app.component';
  

  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      provideHttpClient(withFetch()) // Fetch API'yi etkinleştirin
    ]
  })
  .catch((err) => console.error(err));
