import React from 'react'
import styled from 'styled-components'
import { Button, PeopleIn, Select } from '../../Atoms'
import Post from './Post'
import exampleAvatar7 from '../../../assets/images/example-avatar-7.png';
import Avatar from '../Chat/Avatar';

export interface CommunityProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Community(props: CommunityProps): JSX.Element {

    const { style } = props

    return (
        <StyledCommunity style={style}>
            <CommunityHeader>
                <Select
                    theme='gray'
                    options={[{ title: "Announcement", value: '1' }]}
                    style={{ margin: 0, width: '15rem' }}
                />
                <Button primary padding=".6rem 3rem" noShadow>Post</Button>
            </CommunityHeader>
            <Post
                type='completed-card'
                likes={1892}
                comments={72}
                contact='Sansa, Laura, Marho, David...'
                time='Just now'
                avatar={<PeopleIn size={"2.8rem"} count={1} />}
            />
            <Post
                type='completed-card'
                likes={1892}
                comments={72}
                contact='Sansa Indira'
                time='4 hours ago'
                shownComments={[
                    {
                        contact: 'John Kennedy',
                        time: '11:20',
                        text: 'Lorem ipsum dolor sit amet, consec jewevnmdmd.',
                        likes: 1892,
                        avatarUrl: exampleAvatar7
                    }
                ]}
                avatar={<Avatar imageAvatarSrc={exampleAvatar7} size={"3.2rem"} />}
            />
            <Post
                type='vote'
                likes={1892}
                comments={72}
                contact='Sansa Indira'
                time='4 hours ago'
                avatar={<Avatar imageAvatarSrc={exampleAvatar7} size={"3.2rem"} />}
            />
            <Post
                type='text'
                likes={1892}
                comments={72}
                contact='Sansa Indira'
                time='4 hours ago'
                text='Hello squad!'
                avatar={<Avatar imageAvatarSrc={exampleAvatar7} size={"3.5rem"} />}
            />
        </StyledCommunity>
    )
}

const StyledCommunity = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    width: calc(100% - 2rem);

    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 1.5rem 10vw;
        max-width: 80vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 1.5rem 20vw;
        max-width: 60vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 1.5rem 25vw;
        max-width: 50vw;
    }

    @media screen and (min-width: 1600px) {
        padding: 1.5rem 30vw;
        max-width: 40vw;
    }
`

const CommunityHeader = styled.header`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
`


