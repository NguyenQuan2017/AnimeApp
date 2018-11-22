import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideMangaPage } from './slide-manga';

@NgModule({
  declarations: [
    SlideMangaPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideMangaPage),
  ],
})
export class SlideMangaPageModule {}
