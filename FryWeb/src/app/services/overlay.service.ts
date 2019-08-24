import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class OverlayService implements OnDestroy {
  private onDestroy$ = new Subject<boolean>();
  landingPageOverlayClosedStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  currentLandingPageOverlayClosedStatus = this.landingPageOverlayClosedStatus$.asObservable().pipe(takeUntil(this.onDestroy$));

  constructor() { }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  pushUpdatedLandingPageOverlayClosedStatus(isLandingPageOverlayClosed: boolean) {
    this.landingPageOverlayClosedStatus$.next(true);
  }

}
