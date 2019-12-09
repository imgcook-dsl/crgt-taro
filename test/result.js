import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import transfromPX from '@utils/transfromPX';

var styles = {
  departureCity: {
    width: transfromPX(104),
    maxWidth: transfromPX(104),
    height: transfromPX(32),
    overflow: 'hidden',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    lineHeight: transfromPX(32),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#7a8599',
    fontSize: transfromPX(26),
    fontWeight: '400',
    lines: '1'
  },
  beijing: {
    marginTop: transfromPX(24),
    width: transfromPX(80),
    maxWidth: transfromPX(92),
    height: transfromPX(48),
    overflow: 'hidden',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    lineHeight: transfromPX(48),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#323233',
    fontSize: transfromPX(40),
    fontWeight: '500',
    lines: '1'
  },
  wrap: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: transfromPX(104)
  },
  largeIcon: {
    position: 'absolute',
    top: transfromPX(0),
    left: transfromPX(0),
    width: transfromPX(70),
    height: transfromPX(70)
  },
  mark: {
    position: 'relative',
    width: transfromPX(40),
    height: transfromPX(23)
  },
  block: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: transfromPX(70),
    height: transfromPX(70)
  },
  arrivalCity: {
    width: transfromPX(104),
    maxWidth: transfromPX(142),
    height: transfromPX(32),
    overflow: 'hidden',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    lineHeight: transfromPX(32),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#7a8599',
    fontSize: transfromPX(26),
    fontWeight: '400',
    lines: '1'
  },
  yanjiao: {
    marginTop: transfromPX(24),
    marginLeft: transfromPX(24),
    width: transfromPX(80),
    maxWidth: transfromPX(118),
    height: transfromPX(48),
    overflow: 'hidden',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    lineHeight: transfromPX(48),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#323233',
    fontSize: transfromPX(40),
    fontWeight: '500',
    lines: '1'
  },
  group: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: transfromPX(104)
  },
  bd: {
    ...(process.env.TARO_ENV === 'rn' ? { boxSizing: 'border-box' } : null),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: transfromPX(60),
    paddingRight: transfromPX(49),
    paddingLeft: transfromPX(50),
    width: transfromPX(710),
    height: transfromPX(104)
  },
  color: {
    backgroundColor: '#e8e8e8',
    width: transfromPX(638),
    height: transfromPX(1)
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: transfromPX(16),
    width: transfromPX(709)
  },
  submain: {
    marginTop: transfromPX(40),
    marginLeft: transfromPX(50),
    width: transfromPX(104),
    maxWidth: transfromPX(648),
    height: transfromPX(32),
    overflow: 'hidden',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    lineHeight: transfromPX(32),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#7a8599',
    fontSize: transfromPX(26),
    fontWeight: '400',
    lines: '1'
  },
  num: {
    marginLeft: transfromPX(50),
    height: transfromPX(42),
    fontWeight: 'normal',
    fontSize: transfromPX(36),
    color: '#323233',
    lineHeight: transfromPX(42),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    lines: '1',
    fontFamily: 'Helvetica'
  },
  today: {
    marginLeft: '12',
    height: transfromPX(38),
    fontWeight: '400',
    fontSize: transfromPX(28),
    color: '#323233',
    lineHeight: transfromPX(42),
    position: 'static',
    left: transfromPX(296),
    bottom: transfromPX(220),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    lines: '1'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: transfromPX(24),
    width: transfromPX(709),
    height: transfromPX(42),
    verticalAlign: 'bottom',
    position: 'relative'
  },
  query: {
    width: transfromPX(68),
    maxWidth: transfromPX(634),
    height: transfromPX(42),
    overflow: 'hidden',
    textAlign: 'center',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    lineHeight: transfromPX(42),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#ffffff',
    fontSize: transfromPX(34),
    fontWeight: '500',
    lines: '1'
  },
  queryWrap: {
    backgroundColor: '#2a70fe',
    width: transfromPX(646),
    height: transfromPX(88),
    boxShadow: '0px 2px 8px rgba(82, 88, 102, 0.20)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: transfromPX(4)
  },
  ft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: transfromPX(79),
    width: transfromPX(709)
  }
};

class Mod extends Component {
  render() {
    return (
      <View>
        <View style={styles.bd}>
          <View style={styles.wrap}>
            <Text style={styles.departureCity}>出发城市</Text>
            <Text style={styles.beijing}>北京</Text>
          </View>
          <View style={styles.block}>
            <Image
              style={styles.largeIcon}
              src={
                'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9b3447701a7211ea92f973cd20f79d78.png'
              }
            />
            <Image
              style={styles.mark}
              src={
                'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/9b595ba01a7211ea9bd4bdb36b29f2c4.png'
              }
            />
          </View>
          <View style={styles.group}>
            <Text style={styles.arrivalCity}>到达城市</Text>
            <Text style={styles.yanjiao}>燕郊</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.color} />
        </View>
        <Text style={styles.submain}>出发时间</Text>
        <View style={styles.row}>
          <Text style={styles.num}>11</Text>
          <Text style={styles.today}>今天</Text>
        </View>
        <View style={styles.ft}>
          <View style={styles.queryWrap}>
            <Text style={styles.query}>查询</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Mod;
