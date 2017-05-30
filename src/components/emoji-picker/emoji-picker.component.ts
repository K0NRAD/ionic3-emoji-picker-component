import { EmojiPickerItem } from './../../model/emoji-picker/emoji-picker.interface';
import { EventEmitter, Output } from '@angular/core';
import { EmojiPickerProvider } from './../../providers/emoji-picker/emoji-picker.provider';
import { Component } from '@angular/core';

@Component({
  selector: 'emoji-picker',
  templateUrl: 'emoji-picker.component.html'
})
export class EmojiPickerComponent {

  imojiPickerItemGroups: Array<Array<EmojiPickerItem>>;
  @Output() selectedImojiPickerIten: EventEmitter<EmojiPickerItem>;

  constructor(
    private emojiPickerProvider: EmojiPickerProvider
  ) {
    emojiPickerProvider.getEmojiGroups().then(data => {
      this.imojiPickerItemGroups = data;
    });
    this.selectedImojiPickerIten = new EventEmitter<EmojiPickerItem>();
  }

  publishSelectedEmoji(imojiPickerItem: EmojiPickerItem) {
    this.selectedImojiPickerIten.emit(imojiPickerItem);
  }

}
