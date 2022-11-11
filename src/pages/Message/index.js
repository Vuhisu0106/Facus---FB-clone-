import classNames from 'classnames/bind';

import styles from './Message.module.scss';
import Chat from '~/layouts/components/Message/Chat';
import ChatSidebar from '~/layouts/components/Message/ChatSidebar';
import EmptyChat from '~/layouts/components/Message/EmptyChat';
import { useUI } from '~/context/UIContext';
import Grid from '~/components/Grid/Grid';
import GridRow from '~/components/Grid/GridRow';
import GridColumn from '~/components/Grid/GridColumn';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
function Message() {
    const { checkDark } = useUI();

    const chat = useSelector((state) => state.chat);

    return (
        <Grid chat className={cx('container', checkDark())}>
            <GridRow>
                <GridColumn l={12} m={12} s={12} className={cx('chat-col')}>
                    <div className={cx('wrapper')}>
                        <ChatSidebar />
                        {chat.chatId === 'null' || (chat.chatId && chat.isAddChatVisible) ? <EmptyChat /> : <Chat />}
                    </div>
                </GridColumn>
            </GridRow>
        </Grid>
    );
}

export default Message;
