import * as colors from './colors';
import * as dimens from './dimens';
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

const cardShadow = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: dimens.cardRadius
};

const defaultContainer = {
  flex: 1,
  backgroundColor: colors.backgroundColor
}

export {
  defaultHeaderStyle,
  bigHeaderStyle,
  cardShadow,
  defaultContainer
};