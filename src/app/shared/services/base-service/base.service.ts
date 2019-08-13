import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable()
export abstract class IrsBaseService<T> implements OnDestroy {

  protected default: T;
  protected source: BehaviorSubject<T>;
  public current$: Observable<T>;
  protected subscriptions: Array<Subscription>;

  constructor(t?: T) {
    this.subscriptions = [];
    this.source = new BehaviorSubject<T>(t || this.default);
    this.current$ = this.source.asObservable();
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(subscription => {
        if (subscription) {
          subscription.unsubscribe();
        }
      });
    }
  }

  public set(data: T) {
    if (data) {
      this.source.next(data);
    } else {
      this.source.next(this.default);
      console.error('A null object was passed to the ' + this.constructor.name);
    }
  }



}
