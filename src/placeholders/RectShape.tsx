import * as React from 'react';
import * as PropTypes from 'prop-types';

export type Props = {
  color?: string,
  className?: string,
  style?: React.CSSProperties
}

export default class RectShape extends React.Component<Props> {

  static propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const { className, style, color } = this.props;

    const defaultStyle = {
      backgroundColor: color,
      width: '100%',
      height: '100%',
      marginRight: 10
    };

    const classes = ['rect-shape', className].filter(c => c).join(' ');

    return (
      <div className={classes} style={{ ...defaultStyle, ...style }} />
    );
  }

}