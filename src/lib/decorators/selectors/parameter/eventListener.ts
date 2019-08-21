import { createPrameterDecorator } from '../../../core';
import { EventListenerMeta } from '../methods';

export const Event = createPrameterDecorator(() => {
  return EventListenerMeta.EVENT;
});

export const Siblings = createPrameterDecorator(() => {
  return EventListenerMeta.SIBLINGS;
});

export const Target = createPrameterDecorator(() => {
  return EventListenerMeta.TARGET;
});
