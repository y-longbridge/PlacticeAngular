import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { enableProdMode }　from '@angular/core'; // 本番モード切替用
enableProdMode();  // 本番モード切替用 ()

platformBrowserDynamic().bootstrapModule(AppModule);


