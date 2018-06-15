import { AppRoutes } from './../app.routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import {RouterModule} from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { EventsComponent } from './components/events/events.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ViewComponent,
    EventsComponent,
    DetailpageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
