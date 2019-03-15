import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'konw2';
  imgURL = 'https://cdn-images-1.medium.com/max/800/1*56eXMJb-PVR10qln6Fo9xg.jpeg'
  imgs: string[] = [
    'https://cdn-images-1.medium.com/max/800/1*56eXMJb-PVR10qln6Fo9xg.jpeg',
    'https://cdn-images-1.medium.com/max/800/1*56eXMJb-PVR10qln6Fo9xg.jpeg',
    'https://cdn-images-1.medium.com/max/800/1*56eXMJb-PVR10qln6Fo9xg.jpeg',
    'https://cdn-images-1.medium.com/max/800/1*56eXMJb-PVR10qln6Fo9xg.jpeg'
  ]
  licznik = 10;
  inputText: string;
  inputTextLength: number
  czyPokazacMema = false
  a = 'red'

  wezPokazMema() {
    this.czyPokazacMema = !this.czyPokazacMema;
  }
  onPokazDlugoscClick(txt: string) {
      this.inputTextLength = txt.length
  }
  onInputChange(e) {
    this.inputText = e.target.value
  }
  onBtnClick(e) {
    setInterval(
      () => {
        this.licznik--;
      }, 1000
    )
  }
}
