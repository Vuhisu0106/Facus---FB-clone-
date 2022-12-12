import classNames from 'classnames/bind';
import { StyleRoot } from 'radium';
import { useViewport } from '../Hook';

import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

function GridColumn({ s, s_o, m, m_o, l, l_o, className, children }) {
    //const viewPort = useViewport();
    // const isSmall = viewPort.width <= 740;
    // const isMedium = viewPort.width <= 740;
    // const isLarge = viewPort.width <= 740;
    const classes = cx('col', { [className]: className });
    // const x = isLarge ? l : isMedium ? m : s;
    // const x_o = isLarge ? l_o : isMedium ? m_o : s_o;
    return (
        <StyleRoot
            className={classes}
            style={{
                //col

                '@media (max-width: 740px)': {
                    display: s === 0 && 'none',
                    flex: s !== 0 && `0 0 calc((100%/12)*${s})`,
                    maxWidth: s !== 0 && `calc((100%/12)*${s})`,
                    //col with margin
                    marginLeft: `calc((100%/12)*${s_o})`,
                },

                //>= Tablet
                '@media (min-width: 740px) and (max-width: 1023px)': {
                    flex: m !== 0 && `0 0 calc((100%/12)*${m})`,
                    maxWidth: m !== 0 && `calc((100%/12)*${m})`,
                    display: m === 0 ? 'none' : 'block',
                    marginLeft: m_o !== 0 && `calc((100%/12)*${m_o})`,
                    // left: fixedLeft && `calc((100vw - 984px) / 2)`,
                    // right: fixedRight && `calc((100vw - 984px) / 2)`,
                },

                //PC medium resolution >
                '@media (min-width: 1024px)': {
                    flex: l !== 0 && `0 0 calc((100%/12)*${l})`,
                    maxWidth: l !== 0 && `calc((100%/12)*${l})`,
                    width: l !== 0 && `calc((100%/12)*${l})`,
                    minWidth: l !== 0 && `calc((100%/12)*${l})`,
                    display: l === 0 ? 'none' : 'block',
                    marginLeft: l_o !== 0 && `calc((100%/12)*${l_o})`,
                    // left: fixedLeft && `calc((100vw - 984px) / 2)`,
                    // right: fixedRight && `calc((100vw - 984px) / 2)`,
                },

                // '@media (min-width: 1239px)': {
                //     left: fixedLeft && `calc((100vw - 1178px) / 2)`,
                //     right: fixedRight && `calc((100vw - 1178px) / 2)`,
                // },

                //Tablet - PC low resolution
            }}
        >
            {/* <div
                className={classes}
                style={{
                    //col

                    display: s === 0 && 'none',
                    flex: s !== 0 && `0 0 calc((100%/12)*${s})`,
                    maxWidth: s !== 0 && `calc((100%/12)*${s})`,
                    //col with margin
                    marginLeft: `calc((100%/12)*${s_o})`,

                    //>= Tablet
                    '@media (min-width: 740px)': {
                        flex: m !== 0 && `0 0 calc((100%/12)*${m})`,
                        maxWidth: m !== 0 && `calc((100%/12)*${m})`,
                        display: m === 0 ? 'none' : 'block',
                        marginLeft: m_o !== 0 && `calc((100%/12)*${m_o})`,
                    },

                    //PC medium resolution >
                    '@media (min-width: 1024px)': {
                        flex: l !== 0 && `0 0 calc((100%/12)*${l})`,
                        maxWidth: l !== 0 && `calc((100%/12)*${l})`,
                        display: l === 0 ? 'none' : 'block',
                        marginLeft: l_o !== 0 && `calc((100%/12)*${l_o})`,
                    },

                    //Tablet - PC low resolution
                }}
            > */}
            {children}
            {/* </div> */}
        </StyleRoot>
    );
}

export default GridColumn;
