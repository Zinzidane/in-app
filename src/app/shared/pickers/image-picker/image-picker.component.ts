import { Component, OnInit } from '@angular/core';
import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  selectedImage: string;

  constructor() { }

  ngOnInit() {}

  onPickImage() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      return;
    }
  }

}
