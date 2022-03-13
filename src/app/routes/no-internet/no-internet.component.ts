import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-no-internet',
  templateUrl: './no-internet.component.html',
  styleUrls: ['./no-internet.component.less'],
})
export class NoInternetComponent implements OnInit, OnDestroy {
  isOnline = false;
  timer: any;
  TIME_OUT = 30 * 60; // 30 MIN
  count = 0;

  ngOnInit(): void {
    this.timerCheckConnect();
  }

  timerCheckConnect() {
    this.timer = setInterval(() => {
      this.onlineCheck();
      if (this.isOnline) {
        clearInterval(this.timer);
        window.location.reload();
      }
      if (this.count === this.TIME_OUT) {
        clearInterval(this.timer);
      }
      this.count += 5;
    }, 5000);
  }

  onlineCheck(): void {
    let xhr = new XMLHttpRequest(); //creating new XML object
    //TODO : Change order URL
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); //sending get request on this URL
    xhr.onload = () => {
      if (xhr.status == 200 && xhr.status < 300) {
        this.isOnline = true;
      } else {
        this.isOnline = false; //calling offline function if ajax status is not equal to 200 or not less that 300
      }
    };
    xhr.onerror = () => {
      this.isOnline = false; //calling offline function if the passed url is not correct or returning 404 or other error
    };
    xhr.send(); //sending get request to the passed url
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
