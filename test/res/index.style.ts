import transfromPX from '@utils/transfromPX';
import React from 'react';

export const zhangSan: React.CSSProperties = {
  marginTop: transfromPX(1),
  height: transfromPX(34),
  fontWeight: 'bold',
  fontSize: transfromPX(28),
  color: '#323233',
  lineHeight: transfromPX(34),
  maxWidth: transfromPX(183),
  overflow: 'hidden',
  ...(process.env.TARO_ENV !== 'rn' ? { textOverflow: 'ellipsis' } : null),
  ...(process.env.TARO_ENV !== 'rn' ? { whiteSpace: 'nowrap' } : null)
};
export const adult: React.CSSProperties = {
  width: transfromPX(40),
  height: transfromPX(24),
  lineHeight: transfromPX(24),
  ...(process.env.TARO_ENV !== 'rn' ? { whiteSpace: 'nowrap' } : null),
  color: '#266eff',
  fontSize: transfromPX(20),
  fontWeight: 'bold'
};
export const adultWrap: React.CSSProperties = {
  ...(process.env.TARO_ENV !== 'rn' ? { boxSizing: 'border-box' } : null),
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginLeft: transfromPX(16),
  borderWidth: transfromPX(2),
  borderStyle: 'solid',
  borderColor: 'rgba(38,110,255,1.00)',
  backgroundColor: '#f3f7ff',
  paddingRight: transfromPX(15),
  paddingLeft: transfromPX(14),
  height: transfromPX(36)
};
export const iconqianbi: React.CSSProperties = {
  position: 'absolute',
  top: transfromPX(4),
  right: transfromPX(139),
  width: transfromPX(14),
  height: transfromPX(15)
};
export const iconunselected: React.CSSProperties = {
  position: 'relative',
  marginTop: transfromPX(4),
  marginLeft: transfromPX(34),
  width: transfromPX(28),
  height: transfromPX(28)
};
export const outer: React.CSSProperties = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  width: transfromPX(341),
  height: transfromPX(36)
};
export const iDCard: React.CSSProperties = {
  marginTop: transfromPX(16),
  height: transfromPX(30),
  fontSize: transfromPX(24),
  color: '#b8becc',
  lineHeight: transfromPX(30),
  maxWidth: transfromPX(341),
  overflow: 'hidden',
  ...(process.env.TARO_ENV !== 'rn' ? { textOverflow: 'ellipsis' } : null),
  ...(process.env.TARO_ENV !== 'rn' ? { whiteSpace: 'pre' } : null),
  letterSpacing: transfromPX(0.29)
};
export const side: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: transfromPX(38),
  height: transfromPX(38),
  position: 'absolute',
  top: transfromPX(53),
  bottom: transfromPX(53),
  right: transfromPX(40),
  backgroundColor: '#266eff',
  borderRadius: transfromPX(38)
};
export const primary: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: transfromPX(40),
  width: transfromPX(750),
  height: transfromPX(146)
};
export const box: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: transfromPX(670),
  height: transfromPX(82)
};
