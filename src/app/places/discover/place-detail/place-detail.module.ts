import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPage } from './place-detail.page';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaceDetailPage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent]
})
export class PlaceDetailPageModule {}
