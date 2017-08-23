import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/component';
import { HeroDetailComponent } from './heroes/hero-detail/component';
import { DashboardComponent } from './dashboard/component';
import { HeroService } from './heroes/hero.service';
import { AppRoutingModule }     from './app-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AccordionModule.forRoot()
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
