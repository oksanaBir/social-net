import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Text from '../../ui/Text';
import { HeartOutlined, ShareAltOutlined, CloseOutlined } from '@ant-design/icons';
import PostWrapper from '../../ui/PostWrapper';
import { useDispatch } from 'react-redux';
import { likePost, sharePost, deletePost } from '../../store/actions';

export default function Post({post}) {
    const {text, likes, share, id} = post;
    const dispatch = useDispatch();

    return(
        <PostWrapper>
            <FlexBox position={flexPosition.end}>
                <CloseOutlined
                    style={{ margin: '15px 15px 0 15px' }}
                    onClick={
                        () => dispatch(deletePost(id))
                    }
                />
            </FlexBox>
            <Text margin={17}>{ text }</Text>
            <FlexBox direction={flexDirection.row} margin={15}>
                <HeartOutlined
                    style={{ margin: '5px 0 5px 0' }}
                    value={likes}
                    onClick={
                        () => dispatch(likePost(id, likes + 1))
                    }
                />
                <p
                    style={{ margin: '5px'}}
                >{ likes }</p>
                <ShareAltOutlined
                    style={{ margin: '5px 0 5px 10px' }}
                    value={share}
                    onClick={
                        () => dispatch(sharePost(id, share + 1))
                    }
                />
                <p
                    style={{margin: '5px'}}
                >{ share }</p>
            </FlexBox>
        </PostWrapper>
    );
}