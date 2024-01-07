import { PropsWithChildren } from 'react';

export type NWPropsWithChildren<T = object> = PropsWithChildren<
  { className?: string } & T
>;
