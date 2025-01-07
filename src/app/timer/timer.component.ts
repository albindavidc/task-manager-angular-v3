import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnDestroy {
  totalTime: number = 0;
  remainingTime: number = 0;
  timerSubscription: Subscription | null = null;
  isRunning: boolean = false;

  startTimer(): void {
    if (!this.isRunning && this.remainingTime <= 0) {
      this.isRunning = true;
      this.timerSubscription = interval(1000).subscribe(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          this.resetTimer();
        }
      });
    }
  }

  stopTimer(): void {
    if (this.isRunning) {
      this.isRunning = false;
      this.timerSubscription?.unsubscribe();
      this.timerSubscription = null;
    }
  }

  resetTimer(): void {
    this.stopTimer();
    this.remainingTime = this.totalTime;
  }

  formatTime(): string {
    const minute = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    return `${this.padTime(minute)} : ${this.padTime(seconds)}`;
  }

  padTime(num: number): string {
    return num > 10 ? `${num}` : `0${num}`;
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
}
