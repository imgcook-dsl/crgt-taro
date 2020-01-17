import transfromPX from '@utils/transfromPX';
import React from 'react';

export const fail: React.CSSProperties = {
  marginTop: transfromPX(8),
  marginLeft: transfromPX(39),
  width: transfromPX(42),
  height: transfromPX(41)
};
export const title: React.CSSProperties = {
  marginLeft: transfromPX(39),
  height: transfromPX(48),
  lineHeight: transfromPX(48),
  ...(process.env.TARO_ENV !== 'rn' ? { whiteSpace: 'nowrap' } : null),
  color: '#262626',
  fontSize: transfromPX(34)
};
export const bd: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
};
export const title_2: React.CSSProperties = {
  maxWidth: transfromPX(737),
  height: transfromPX(42),
  overflow: 'hidden',
  ...(process.env.TARO_ENV !== 'rn' ? { textOverflow: 'ellipsis' } : null),
  lineHeight: transfromPX(42),
  ...(process.env.TARO_ENV !== 'rn' ? { whiteSpace: 'nowrap' } : null),
  color: '#677187',
  fontSize: transfromPX(30)
};
export const main: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: transfromPX(5),
  width: transfromPX(749)
};
export const failure: React.CSSProperties = {
  marginTop: transfromPX(10),
  marginLeft: transfromPX(39),
  width: transfromPX(42),
  height: transfromPX(41)
};
export const title_3: React.CSSProperties = {
  marginLeft: transfromPX(39),
  height: transfromPX(49),
  lineHeight: transfromPX(49),
  ...(process.env.TARO_ENV !== 'rn' ? { whiteSpace: 'nowrap' } : null),
  color: '#262626',
  fontSize: transfromPX(35)
};
export const submain: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: transfromPX(32)
};
export const row: React.CSSProperties = {
  marginTop: transfromPX(5),
  marginLeft: transfromPX(120),
  maxWidth: transfromPX(618),
  height: transfromPX(42),
  overflow: 'hidden',
  ...(process.env.TARO_ENV !== 'rn' ? { textOverflow: 'ellipsis' } : null),
  lineHeight: transfromPX(42),
  ...(process.env.TARO_ENV !== 'rn' ? { whiteSpace: 'nowrap' } : null),
  color: '#677187',
  fontSize: transfromPX(30)
};
export const color: React.CSSProperties = {
  backgroundColor: '#e9e9e9',
  width: transfromPX(685),
  height: transfromPX(2)
};
export const row_2: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: transfromPX(45),
  width: transfromPX(749)
};
export const title_4: React.CSSProperties = {
  marginLeft: transfromPX(400),
  maxWidth: transfromPX(301),
  height: transfromPX(42),
  overflow: 'hidden',
  ...(process.env.TARO_ENV !== 'rn' ? { textOverflow: 'ellipsis' } : null),
  lineHeight: transfromPX(42),
  ...(process.env.TARO_ENV !== 'rn' ? { whiteSpace: 'nowrap' } : null),
  color: '#262626',
  fontSize: transfromPX(30)
};
export const PagingRight: React.CSSProperties = {
  marginTop: transfromPX(8),
  marginLeft: transfromPX(20),
  width: transfromPX(16),
  height: transfromPX(26)
};
export const ft: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: transfromPX(27)
};
export const box: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  width: transfromPX(750),
  height: transfromPX(395)
};
