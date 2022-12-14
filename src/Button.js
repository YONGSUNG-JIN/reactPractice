import PropTypes from 'prop-types';
import styles from './Btn.module.css'

function Button({text, changeBtn}) {
    return <button className={styles.btn} onClick={changeBtn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;