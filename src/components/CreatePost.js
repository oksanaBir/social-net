import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions, margin } from '../ui/FlexBox';
import { CheckOutlined, CameraOutlined } from '@ant-design/icons';
import TextArea from '../ui/TextArea';

export default function CreatePost({ addPhoto, createPost }) {
    return(
        <FlexBox direction={flexDirection.column}>
            <TextArea />
            <FlexBox margin={15} position={flexPositions.end}>
                <CameraOutlined
                    style={{ margin: '5px' }}
                    onClick={addPhoto} 
                />
                <CheckOutlined
                    style={{ margin: '5px' }}
                    onClick={createPost}
                />
            </FlexBox>
        </FlexBox>
    );
}