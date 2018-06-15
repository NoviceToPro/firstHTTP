
import { DetailpageComponent } from './app/components/detailpage/detailpage.component';
import { ViewComponent } from './app/components/view/view.component';
import { BookingComponent } from './app/components/booking/booking.component';
import { EventsComponent } from './app/components/events/events.component';
import { RouterModule, Routes,RouterOutlet, RouterLink } from '@angular/router';






export const AppRoutes =[

    {path: '', component: BookingComponent},
    {path: 'detailpage', component: DetailpageComponent, children: [
    {path: 'events', component: EventsComponent},
    {path: 'view', component: ViewComponent }
    ]}
    

];

