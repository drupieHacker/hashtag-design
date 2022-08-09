import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { ServiceComponent } from './service/service.component';
import { ProductsComponent } from './products/products.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { JobsComponent } from './jobs/jobs.component';
import { FooterComponent } from './footer/footer.component';
import { CardsServiceComponent } from './cards-service/cards-service.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { BtnWhatsComponent } from './btn-whats/btn-whats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    MapComponent,
    ServiceComponent,
    ProductsComponent,
    PortfolioComponent,
    JobsComponent,
    FooterComponent,
    CardsServiceComponent,
    ParallaxComponent,
    BtnWhatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
