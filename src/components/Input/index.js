import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({ className, placeHolder, leftIcon, rightIcon, classNameRightBtn, inputRef, onChange, ...passProps }) {
    //const inputRef = useRef();
    const props = {
        onChange,
        ...passProps,
    };
    return (
        <div className={cx('wrapper', { [className]: className })}>
            {leftIcon && <button className={cx('left-button')}>{leftIcon}</button>}
            <input ref={inputRef} placeholder={placeHolder} {...props}></input>
            {rightIcon && (
                <button className={cx('right-button', { [classNameRightBtn]: classNameRightBtn })}>{rightIcon}</button>
            )}
        </div>
    );
}

export default Input;
