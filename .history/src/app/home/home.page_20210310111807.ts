import {Component} from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';

// Declaring the modules for PESDK
declare var PESDK;
const { Filesystem } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
 error:any = "no-error"

  pesdk_success(result) {
    if (result != null) {
      alert('PESDK result: ' + result.image);
    } else {
      this.error = "result null";

      console.log('pesdk_success: result is null, the editor was canceled');
  };
  }

  pesdk_failure(error) {
    this.error = JSON.stringify(error);
    console.log('pesdk_failure: ' + JSON.stringify(error))
  };

  onButtonClick(event) {

    const config = {
      engine: {
        downscaleOptions: {
          maxDimensions: { width: 1080 },
        },
      },
    };

    PESDK.openEditor(
        this.pesdk_success, this.pesdk_failure,
        PESDK.loadResource('www/assets/LA.jpg'), config);
  }
}