import {Size} from '@consts'

export interface FlexOwnProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  gap?: Size | string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}