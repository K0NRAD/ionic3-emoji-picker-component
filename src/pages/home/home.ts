import { EmojiPickerItem } from './../../model/emoji-picker/emoji-picker.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  selectedImojiPickerIten: EmojiPickerItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  emoji(event) {
    this.selectedImojiPickerIten = event;
  }
}
