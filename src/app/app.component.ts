import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  text = '';
  invertLetters = false;
  invertNumbers = false;
  invertOthers = false;
  inverted = '';

  onChangeText(event: Event) {
    this.inverted = '';
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  onChangeInvertLetters() {
    this.invertLetters = !this.invertLetters;
  }

  onChangeInvertNumbers() {
    this.invertNumbers = !this.invertNumbers;
  }

  onChangeInvertOthers() {
    this.invertOthers = !this.invertOthers;
  }

  onButtonClick() {
    var textArray = Array.from(this.text);
    var invertedArray = [];
    let invertNumbersArray = [];
    //for (let i = this.text.length - 1; i >= 0; i--) {
    for (let i = 0; i < this.text.length; i++) {
      if (!isNaN(parseInt(this.text[i]))) {
        if (this.invertNumbers) {
          invertNumbersArray.unshift(this.text[i]);
        }
        else invertedArray[i] = this.text[i];
      }
      else if (this.text[i].match(/[a-z]/i)) {
        if (this.invertLetters) {
          invertNumbersArray.unshift(this.text[i]);
        }
        else invertedArray[i] = this.text[i];
      }
      else {
        if (this.invertOthers) {
          invertNumbersArray.unshift(this.text[i]);
        }
        else invertedArray[i] = this.text[i];
      }
    }
    for (let i = 0; i < this.text.length; i++) {
      if (invertedArray[i] == null) {
        invertedArray[i] = invertNumbersArray.shift();
      }
    }
    this.inverted = invertedArray.join('');
  }

  getInverted() {
    return this.inverted;
  }
}
