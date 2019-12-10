import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import transfromPX from '@utils/transfromPX';

var styles = {
  zhangSan: {
    marginTop: transfromPX(1),
    height: transfromPX(34),
    fontWeight: 500,
    fontSize: transfromPX(28),
    color: '#323233',
    lineHeight: transfromPX(34),
    maxWidth: transfromPX(183),
    overflow: 'hidden',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null)
  },
  adult: {
    width: transfromPX(40),
    height: transfromPX(24),
    lineHeight: transfromPX(24),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#266eff',
    fontSize: transfromPX(20),
    fontWeight: 500
  },
  adultWrap: {
    ...(process.env.TARO_ENV === 'rn' ? { boxSizing: 'border-box' } : null),
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
  },
  iconqianbi: {
    position: 'absolute',
    top: transfromPX(4),
    right: transfromPX(139),
    width: transfromPX(14),
    height: transfromPX(15)
  },
  iconunselected: {
    position: 'relative',
    marginTop: transfromPX(4),
    marginLeft: transfromPX(34),
    width: transfromPX(28),
    height: transfromPX(28)
  },
  outer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    width: transfromPX(341),
    height: transfromPX(36)
  },
  iDCard: {
    marginTop: transfromPX(16),
    height: transfromPX(30),
    fontWeight: 400,
    fontSize: transfromPX(24),
    color: '#b8becc',
    lineHeight: transfromPX(30),
    maxWidth: transfromPX(341),
    overflow: 'hidden',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'pre' } : null),
    letterSpacing: transfromPX(0.29)
  },
  side: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: transfromPX(38),
    height: transfromPX(38),
    position: 'absolute',
    top: 53,
    bottom: 53,
    right: 40,
    backgroundColor: '#266eff',
    borderRadius: transfromPX(38)
  },
  primary: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 40,
    width: 750,
    height: 146
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: transfromPX(670),
    height: transfromPX(82)
  }
};

const Mod = () => {
  return (
    <View style={styles.box}>
      <View style={styles.primary}>
        <View style={styles.outer}>
          <Text style={styles.zhangSan}>张三</Text>
          <View style={styles.adultWrap}>
            <Text style={styles.adult}>成人</Text>
          </View>
          <Image
            style={styles.iconqianbi}
            src={
              'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b1fe15e01a7b11eaab50d947cca984e9.png'
            }
          />
          <Image
            style={styles.iconunselected}
            src={
              'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/b22f10f01a7b11eab1944359678a30ad.png'
            }
          />
        </View>
        <Text style={styles.iDCard}>身份证 240603199004020436</Text>
        <View style={styles.side} />
      </View>
    </View>
  );
};

export default Mod;
