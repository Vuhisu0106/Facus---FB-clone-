import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { onSnapshot, doc } from 'firebase/firestore';
import moment from 'moment';

import { db } from '~/firebase/config';
import styles from './Post.module.scss';
import { useState, useEffect } from 'react';

import PostLayout from '~/components/PostLayout';
import { useViewport } from '~/components/Hook';
import { Grid, GridColumn, GridRow } from '~/components/Grid';
import { useDispatch } from 'react-redux';
import { setPost } from '~/features/PostAndComment/PostAndCommentSlice';

const cx = classNames.bind(styles);
function Post() {
    let params = useParams();

    const viewPort = useViewport();
    const isSmall = viewPort.width <= 740;

    const [postDetail, setPostDetail] = useState();

    const dispatch = useDispatch();
    //const post = useSelector((state) => state.postNcomment.posts);

    useEffect(() => {
        const getPostDetail = () => {
            const unsub = onSnapshot(doc(db, 'post', params.id), (doc) => {
                setPostDetail(doc.data());
                dispatch(setPost([doc.data()]));
            });
            return () => {
                unsub();
            };
        };
        getPostDetail();
    }, [params.id]);

    return (
        postDetail && (
            <div className={cx('container')}>
                <Grid type={'chat'}>
                    <GridRow className={'post-grid-row'}>
                        <GridColumn l={7.75} m={6.75} s={12} className={cx('post-img-wrapper')}>
                            <div className={cx('post-image')}>
                                <img alt={postDetail.poster.displayName} src={postDetail.img} />
                            </div>
                        </GridColumn>
                        <GridColumn l={4} l_o={0.25} m={5} m_o={0.25} s={12} className={cx('post-detail')}>
                            <PostLayout
                                className={cx('post-detail-wrapper')}
                                style={{ overflowY: isSmall && 'scroll' }}
                                postPage
                                key={postDetail?.postId}
                                postId={postDetail?.postId}
                                userId={postDetail?.poster?.uid}
                                userName={postDetail?.poster?.displayName}
                                userAvt={postDetail?.poster?.photoURL}
                                timeStamp={postDetail?.date && moment(postDetail?.date.toDate()).fromNow()}
                                postCaption={postDetail?.caption}
                                like={postDetail?.like}
                                //commentCount={post[1]?.comment?.length}
                            />
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>
        )
    );
}

export default Post;
