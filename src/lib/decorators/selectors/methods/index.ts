import { createMethodDecorator } from '../../../core';
import { getSiblings } from '../../../helper/getSiblings';

export interface EventListenerProps<T = string> {
  events: T | Array<T>;
  elements: T | Array<T>;
}

export const EventListenerMeta = {
  EVENT: '__EVENT__',
  SIBLINGS: '__SIBLINGS__',
  TARGET: '__TARGET__'
};

export const EventListener = createMethodDecorator<EventListenerProps>(
  (fn, meta, props) => {
    console.log(fn, meta, props);
  },
  {
    [EventListenerMeta.EVENT]: (e: Event) => e,
    [EventListenerMeta.TARGET]: ({ target }: { target: Element }) => target,
    [EventListenerMeta.SIBLINGS]: (el: Element) => getSiblings(el)
  }
);
