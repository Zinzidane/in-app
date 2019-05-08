import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

declare var ymaps:any;

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElementRef: ElementRef;
  
  constructor(
    private modalCtrl: ModalController,
    private renderer: Renderer2,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getMap()
      .then(() => {
        const mapEl = this.mapElementRef.nativeElement;
        ymaps.ready().then(() => {
          const map = new ymaps.Map(mapEl, {
            center: [50.450100, 30.523400],
            zoom: 12
          });

          this.renderer.addClass(mapEl, 'visible');
          map.events.add('click', event => {
              const coords = event.get('coords');

              const selectedCoords = {
                lat: coords[0].toFixed(6),
                lng: coords[1].toFixed(6)
              };

              ymaps.geocode(coords)
                .then(resdata => {
                  const address = resdata.geoObjects.get(0).getAddressLine();
                  return address;
                })
                .then(address => {
                  this.modalCtrl.dismiss({address: address, lat: coords[0], lng: coords[1]});
                })
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  private getMap() {
    const win = window as any;
    // const yandexModule = win.ymaps;
    // console.log(yandexModule);
    // if (yandexModule && yandexModule.map) {
    //   return Promise.resolve(yandexModule.map);
    // }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src =
        'https://api-maps.yandex.ru/2.1/?apikey=96a7a9f1-43a7-4409-b9cb-cc41a4187643&lang=ru_RU';
      // script.async = true;
      // script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedYandexModule = win.ymaps;
        // && loadedYandexModule.map
        if (loadedYandexModule) {
          resolve(loadedYandexModule);
        } else {
          reject('Yandex maps SDK not available.');
        }
      };
    });
  }
}
