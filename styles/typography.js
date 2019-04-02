import * as dimens from './dimens';

const defaultHeaderTitleStyle = {
  fontWeight: 'bold'
};

const bigHeaderTitleStyle = {
  ...defaultHeaderTitleStyle,
  flex: 1,
  fontSize: dimens.bigHeaderTextSize,
  textAlign: 'left'
};

const tabBarLabelStyle = {
  fontWeight: 'bold',
  fontSize: dimens.tabTextSize
}

const boldCenterTextStyle = {
  fontWeight: 'bold',
  textAlign: 'center'
}

export {
  defaultHeaderTitleStyle,
  bigHeaderTitleStyle,
  tabBarLabelStyle,
  boldCenterTextStyle
};