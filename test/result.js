'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import transfromPX from '@utils/transfromPX';

var styles = {
  layer: {
    position: 'absolute',
    top: transfromPX(0),
    left: transfromPX(0),
    width: transfromPX(342),
    height: transfromPX(342),
    overflow: 'hidden'
  },
  bg: {
    position: 'absolute',
    top: transfromPX(0),
    left: transfromPX(0),
    opacity: '1.00',
    width: transfromPX(342),
    height: transfromPX(342)
  },
  riverdinwei: {
    opacity: '1.00',
    width: transfromPX(14),
    height: transfromPX(18)
  },
  distance: {
    marginLeft: transfromPX(4),
    width: transfromPX(84),
    height: transfromPX(22),
    lineHeight: transfromPX(22),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#ffffff',
    fontSize: transfromPX(18),
    fontWeight: '400',
    lines: '1'
  },
  wrap: {
    ...(process.env.TARO_ENV === 'rn' ? { boxSizing: 'border-box' } : null),
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: transfromPX(18),
    marginLeft: transfromPX(18),
    borderRadius: transfromPX(15),
    backgroundColor: 'rgba(0,0,0,0.40)',
    paddingRight: transfromPX(9),
    paddingLeft: transfromPX(10),
    height: transfromPX(30)
  },
  bd: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    opacity: '1.00',
    width: transfromPX(342),
    height: transfromPX(342)
  },
  title: {
    marginTop: transfromPX(22),
    width: transfromPX(300),
    height: transfromPX(88),
    overflow: 'hidden',
    ...(process.env.TARO_ENV === 'rn' ? { textOverflow: 'ellipsis' } : null),
    lineHeight: transfromPX(44),
    color: '#333333',
    fontSize: transfromPX(30),
    fontWeight: '400',
    lines: '2'
  },
  main: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: transfromPX(342),
    height: transfromPX(114)
  },
  xianjin: { width: transfromPX(30), height: transfromPX(30) },
  fashionHome: {
    marginLeft: transfromPX(6),
    width: transfromPX(96),
    height: transfromPX(28),
    lineHeight: transfromPX(28),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#666666',
    fontSize: transfromPX(24),
    fontWeight: '300',
    lines: '1'
  },
  block: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: transfromPX(30)
  },
  favorite: { width: transfromPX(22), height: transfromPX(22) },
  num: {
    marginLeft: transfromPX(5),
    width: transfromPX(36),
    height: transfromPX(26),
    lineHeight: transfromPX(26),
    ...(process.env.TARO_ENV === 'rn' ? { whiteSpace: 'nowrap' } : null),
    color: '#999999',
    fontSize: transfromPX(22),
    fontWeight: '400',
    lines: '1'
  },
  group: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: transfromPX(30)
  },
  ft: {
    ...(process.env.TARO_ENV === 'rn' ? { boxSizing: 'border-box' } : null),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: transfromPX(12),
    borderBottomRightRadius: transfromPX(12),
    backgroundColor: '#ffffff',
    paddingRight: transfromPX(17),
    paddingLeft: transfromPX(18),
    width: transfromPX(342),
    height: transfromPX(78),
    overflow: 'hidden'
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: transfromPX(534)
  }
};

class Mod extends Component {
  render() {
    return (
      <View style={styles.box}>
        <View>
          <View style={styles.bd}>
            <Image
              style={styles.layer}
              src={
                'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'
              }
            />
            <Image style={styles.bg} src={this.item.coverImage} />
            <View style={styles.wrap}>
              <Image
                style={styles.riverdinwei}
                src={
                  'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'
                }
              />
              <Text style={styles.distance}>距离500m</Text>
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.title}>{this.item.title}</Text>
          </View>
          <View style={styles.ft}>
            <View style={styles.block}>
              <Image
                style={styles.xianjin}
                src={
                  'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'
                }
              />
              <Text style={styles.fashionHome}>{this.item.user.userName}</Text>
            </View>
            <View style={styles.group}>
              <Image
                style={styles.favorite}
                src={
                  'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'
                }
              />
              <Text style={styles.num}>{this.item.readCount}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Mod;
