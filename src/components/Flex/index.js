import React from 'react'
import classnames from 'classnames'

import './styles.css'

const getClassnames = props => {
  const {
    align,
    alignBaseline,
    alignCenter,
    alignEnd,
    className,
    column,
    fill,
    justify,
    justifyCenter,
    justifyEnd,
    wrap
  } = props

  const classList = classnames(className, 'Flex', {
    'Flex--alignBaseline': alignBaseline || align === 'baseline',
    'Flex--alignCenter': alignCenter || align === 'center',
    'Flex--alignEnd': alignEnd || align === 'flex-end',
    'Flex--column': column,
    'Flex--fill': fill,
    'Flex--justifyCenter': justifyCenter || justify === 'center',
    'Flex--justifyEnd': justifyEnd || justify === 'flex-end',
    'Flex--wrap': wrap
  })

  return classList
}

class Flex extends React.PureComponent {
  render() {
    const {
      align,
      alignBaseline,
      alignCenter,
      alignEnd,
      bindRef = a => a,
      children,
      column,
      fill,
      justify,
      justifyCenter,
      justifyEnd,
      style,
      wrap,
      ...others
    } = this.props

    return (
      <div
        ref={bindRef}
        {...others}
        className={getClassnames(this.props)}
        style={style}
      >
        {children}
      </div>
    )
  }
}

export default Flex
