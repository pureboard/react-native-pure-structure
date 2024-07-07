import { View, type DimensionValue, type ViewProps } from 'react-native';

interface SizedBoxProps extends ViewProps {
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
}

export const SizedBox = ({
  width,
  height,
  backgroundColor,
  style,
  ...props
}: SizedBoxProps) => {
  return (
    <View style={[{ width, height, backgroundColor }, style]} {...props} />
  );
};
