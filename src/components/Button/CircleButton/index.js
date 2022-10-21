import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useApp } from '~/context/AppContext';

import styles from './CircleButton.module.scss';

const cx = classNames.bind(styles);
function CircleButton({ className, to, href, children, onClick }) {
    const { checkDark } = useApp();

    let Comp = 'button';

    const classes = cx('wrapper', checkDark(), { [className]: className });
    const props = {
        onClick,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default CircleButton;
