import { PropsWithChildren } from 'react';

export type NWPropsWithChildren<T = any> = PropsWithChildren<
  T & { className: string }
>;
