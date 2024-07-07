import {
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
  type ViewProps,
} from 'react-native';

export interface WrapperProps extends ViewProps {
  gap?: number;
  flex?: boolean;
  backgroundColor?: string;
}

export interface TouchableWrapperProps extends TouchableOpacityProps {
  gap?: number;
  flex?: boolean;
  backgroundColor?: string;
}

export const Wrapper = (props: WrapperProps) => {
  return (
    <View
      {...props}
      style={[
        { gap: props.gap, backgroundColor: props.backgroundColor },
        props.flex && { flex: 1 },
        props.style,
      ]}
    />
  );
};

export const TouchableWrapper = (props: TouchableWrapperProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        { gap: props.gap, backgroundColor: props.backgroundColor },
        props.flex && { flex: 1 },
        props.style,
      ]}
    />
  );
};
