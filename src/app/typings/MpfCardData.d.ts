/**
 * style data format
 *
 * @interface StyleData
 */
interface StyleData {
  width?: string; // width
  height?: string; // height
  padding?: string; // padding
  margin?: string; // margin
  background?: string; // background
  color?: string; // color
  fontSize?: string; // fontSize
  flex?: string; // flex weight
}

/**
 * mpf card data format
 *
 * @interface MpfCardData
 */
interface MpfCardData {
  style?: StyleData; // card container style
  styleMark?: any; // card mark
  logo?: string; // card left logo URL
  title?: string; // card title text
  body?: string; // card content text
  click?: () => void; // card click event
}
