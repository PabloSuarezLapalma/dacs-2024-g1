import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './core/init/keycloak-init.factory';
import { ApiService } from './core/services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyViewComponent } from './components/daily-view/daily-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    DailyViewComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [
    //Comentar el provider para no usar keycloak
    
    {
      
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
     
    },
     
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
