import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <Button className={`btn btn-${version}`} type={type} disabled={isDisabled}>{children}</Button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button