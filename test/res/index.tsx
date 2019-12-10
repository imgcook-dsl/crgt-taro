import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import * as styles from './index.style.ts';

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
