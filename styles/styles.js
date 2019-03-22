import * as colors from './colors';
import * as typography from './typography';

const defaultHeaderStyle = {
  headerBackTitle: null,
  headerTintColor: colors.primaryTextColor,
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.backgroundColor
  },
  headerTitleStyle: {
    ...typography.defaultHeaderTitleStyle
  }
};

const bigHeaderStyle = {
  ...defaultHeaderStyle,
  headerTitleStyle: {
    ...typography.bigHeaderTitleStyle
  }
};

export {
  defaultHeaderStyle,
  bigHeaderStyle
};