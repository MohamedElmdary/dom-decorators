import { createMethodDecorator } from '../../../core';
import { getSiblings } from '../../../helper/getSiblings';
import { resolveMeta, resolveGlobalMeta, Argument } from '../../../meta';
import { flatten } from '../../../helper';

export interface EventListenerProps<T = string> {
  events: T | Array<T>;
  elements: T | Array<T>;
}

export const EventListenerMeta = {
  EVENT: '__EVENT__',
  SIBLINGS: '__SIBLINGS__',
  TARGET: '__TARGET__'
};

function resolveEventListenerMeta(
  meta: Argument[],
  method: string,
  e: Event
): any[] {
  return meta.map(({ index, value }) => {
    // console.log(value);

    switch (value) {
      case EventListenerMeta.EVENT:
        return e;
      case EventListenerMeta.SIBLINGS:
        return resolveMeta(method, value)(e.target);
      case EventListenerMeta.TARGET:
        return resolveMeta(method, value)(e);
      default:
        return resolveGlobalMeta(value);
    }
  });
}

export const EventListener = createMethodDecorator<EventListenerProps>(
  (target, method, fn, meta, props) => {
    const elements = (
      (typeof props.elements === 'string'
        ? props.elements.split(',')
        : props.elements) || []
    )
      .map(el => {
        return target[el.trim()];
      })
      .filter(a => !!a);

    if (!elements.length) {
      throw new Error(`EventListener require elements to add event on!`);
    }

    const events = (
      (typeof props.events === 'string'
        ? props.events.split(',')
        : props.events) || []
    )
      .map(ev => ev.trim())
      .filter(a => !!a);

    if (!events.length) {
      throw new Error(`EventListener require events to register!`);
    }

    events.forEach((event: string) => {
      flatten(elements).forEach((el: Element) => {
        el.addEventListener(event, function(e) {
          const args = resolveEventListenerMeta(meta, method.toString(), e);
          fn(...args);
        });
      });
    });
  },
  {
    [EventListenerMeta.EVENT]: null,
    [EventListenerMeta.TARGET]: ({ target }: { target: Element }) => target,
    [EventListenerMeta.SIBLINGS]: (el: Element) => getSiblings(el)
  }
);
