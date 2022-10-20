import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Modal.module.scss';
import CircleButton from '../Button/CircleButton';

const cx = classNames.bind(styles);
function Modal({ title, children, onClick }) {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h2>{title}</h2>
                    <CircleButton
                        className={cx('close-modal-btn')}
                        children={<FontAwesomeIcon icon={faXmark} />}
                        onClick={onClick}
                    />
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
