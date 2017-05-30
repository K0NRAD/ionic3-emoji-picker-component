import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';

@NgModule({
  declarations: [
    EmojiPickerComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    EmojiPickerComponent
  ]
})
export class ComponentsModule { }
