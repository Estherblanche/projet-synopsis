import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

interface ProgressBarProps {
  max: number;
  current: number;
  bgColor?: string;
  currentStateColor?: string;
  height?: number;
  duration?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  max,
  current,
  bgColor = '#FEEBC8',
  currentStateColor = '#DD6B20',
  height = 12,
  duration = 500
}) => {
  const progress = useRef(new Animated.Value(0)).current;
  const percentage = Math.min((current / max) * 100, 100);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: percentage,
      duration,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const animatedWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      className="w-full overflow-hidden"
      style={{
        backgroundColor: bgColor,
        height,
        borderRadius: height! / 2,
      }}
    >
      <Animated.View
        className="h-full"
        style={{
          width: animatedWidth,
          backgroundColor: currentStateColor,
          borderRadius: height! / 2,
        }}
      />
    </View>
  );
};

export default ProgressBar;
