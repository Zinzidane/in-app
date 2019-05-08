import { Component, OnInit } from '@angular/core';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { ModalController } from '@ionic/angular';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  onPickLocation() {
    this.modalCtrl
      .create({component: MapModalComponent})
      .then(modalEl => { 
        modalEl.onDidDismiss().then(modalData => {
          if (!modalData.data) {
            return;
          }
          console.log(modalData);
          // this.getAddress(modalData.data.lat, modalData.data.lng)
          // .pipe(
          //   switchMap(address => {
          //     pickedLocation.address = address;
          //     return of(
          //       this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14)
          //     );
          //   })
          // )
          // .subscribe(staticMapImageUrl => {
          //   pickedLocation.staticMapImageUrl = staticMapImageUrl;
          //   this.selectedLocationImage = staticMapImageUrl;
          //   this.isLoading = false;
          //   this.locationPick.emit(pickedLocation);
          // });

          console.log(this.getMapImage(modalData.data.lat, modalData.data.lng, 8));
        
          
              // const img = this.http.get(`https://static-maps.yandex.ru/2.1/?ll=${coords[0]},${coords[1]}&size=450,450&z=13&l=map&pt=${coords[0]},${coords[1]},pmwtm99`).subscribe(data => {
              //   console.log(data);
              // });
          // this.getAddress(modalData.data.lat, modalData.data.lng).subscribe(address => {
          //   console.log(address);
          // });
        });
        modalEl.present();
      });
  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://static-maps.yandex.ru/2.1/?ll=${lat},${lng}&size=450,450&z=${zoom}&l=map&pt=${lat},${lng},pmwtm99`;
  }
}
