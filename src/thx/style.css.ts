import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
  textAlign: 'center',
  gap: '1rem',
});

const rocket = style({
  marginTop: '5rem',
});

export const thxSt = {
  container,
  rocket,
};
