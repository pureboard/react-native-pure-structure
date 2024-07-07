import {
  StyleSheet,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
  type ViewProps,
} from 'react-native';

export interface RowProps extends ViewProps {
  gap?: number;
  flex?: boolean;
}
export interface TouchableRowProps extends TouchableOpacityProps {
  gap?: number;
  flex?: boolean;
}

export const Row = (props: RowProps) => (
  <View
    {...props}
    style={[
      styles.row,
      { gap: props.gap },
      props.flex && { flex: 1 },
      props.style,
    ]}
  />
);
export const AlignedRow = (props: RowProps) => (
  <Row {...props} style={[styles.aligned, props.style]} />
);
export const RightAlignedRow = (props: RowProps) => (
  <Row {...props} style={[styles.rightAligned, props.style]} />
);
export const JustifiedRow = (props: RowProps) => (
  <Row {...props} style={[styles.justified, props.style]} />
);
export const EndJustifiedRow = (props: RowProps) => (
  <Row {...props} style={[styles.endJustified, props.style]} />
);
export const CenteredRow = (props: RowProps) => (
  <Row {...props} style={[styles.centered, props.style]} />
);
export const SpacedRow = (props: RowProps) => (
  <Row {...props} style={[styles.spaced, props.style]} />
);

export const TouchableRow = (props: TouchableRowProps) => (
  <TouchableOpacity
    {...props}
    style={[
      styles.row,
      { gap: props.gap },
      props.flex && { flex: 1 },
      props.style,
    ]}
  />
);
export const AlignedTouchableRow = (props: TouchableRowProps) => (
  <TouchableRow {...props} style={[styles.aligned, props.style]} />
);
export const RightAlignedTouchableRow = (props: TouchableRowProps) => (
  <TouchableRow {...props} style={[styles.rightAligned, props.style]} />
);
export const JustifiedTouchableRow = (props: TouchableRowProps) => (
  <TouchableRow {...props} style={[styles.justified, props.style]} />
);
export const EndJustifiedTouchableRow = (props: TouchableRowProps) => (
  <TouchableRow {...props} style={[styles.endJustified, props.style]} />
);
export const CenteredTouchableRow = (props: TouchableRowProps) => (
  <TouchableRow {...props} style={[styles.centered, props.style]} />
);
export const SpacedTouchableRow = (props: TouchableRowProps) => (
  <TouchableRow {...props} style={[styles.spaced, props.style]} />
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  aligned: {
    alignItems: 'center',
  },
  rightAligned: {
    alignItems: 'flex-end',
  },
  justified: {
    justifyContent: 'center',
  },
  endJustified: {
    justifyContent: 'flex-end',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaced: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
