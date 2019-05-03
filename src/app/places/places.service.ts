import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'r1', 
      'Baranovichy Mansion', 
      'In the heart of the world', 
      'http://www.nashkraj.by/wp-content/uploads/2017/03/NOB_65526.jpg', 
      2569
    ),
    new Place(
      'r2', 
      'Baranovichy State', 
      'The greatest state of the world', 
      'http://kinobrest.by/uploads/posts/2016-06/1465372375_02.-baranovichi-oktyabr-2016g.jpg', 
      221569
    ),
    new Place(
      'r3', 
      'Baranovichy Crib', 
      'Watch out', 
      'http://www.nashkraj.by/wp-content/uploads/2019/03/gorod-baranovichi.jpg', 
      19
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
