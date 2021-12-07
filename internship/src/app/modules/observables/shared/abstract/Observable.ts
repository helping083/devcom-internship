type complete = () => void
type err = () => void
type next = (val: any) => void;
type Observer = (next: next, err?: err, complete?: complete) => void;

class Observable {
  public subscribe: Observer;
  constructor(subscribe: any) {
    this.subscribe = subscribe;
  }

  public pipe(...operators: any): Observable {
    debugger
    return operators.reduce((source:any, next: any) => next(source), this);
  }
}

export function fromEvents(element: HTMLElement, eventType: string) {
  return new Observable( (next: next) => {
    const callback = (event: any) => {
      return next(event)
    };
    element.addEventListener( eventType, callback, false);
  });
}

export function map(cb: any) {

  return cb
}

export default Observable;