import React from 'react'
import styled from 'styled-components'
import { Title, Text, PeopleIn, ProgressBar } from '../../Atoms'
import Flex from '../../Blocks/Flex'
import clock from '../../../assets/icons/clockWhite.svg'
import heart from '../../../assets/icons/heart.svg';
import comment from '../../../assets/icons/comment.svg';
import repost from '../../../assets/icons/repost.svg';
import send from '../../../assets/icons/send-message.svg';
import cardBackground from '../../../assets/images/cardBackground.png';
import exampleAvatar7 from '../../../assets/images/example-avatar-7.png';
import Avatar from '../Chat/Avatar';

interface Comment {
    contact: string,
    avatarUrl?: string
    time: string
    likes?: number
    text: string
}

export interface PostProps {
    style?: React.CSSProperties
    type: 'text' | 'vote' | 'completed-card'
    contact: string
    text?: string
    likes: number
    comments: number
    time: string
    avatar: React.ReactNode
    shownComments?: Comment[]
}

export default function Post(props: PostProps): JSX.Element {

    const { style, type, contact, text, likes, comments, time, shownComments, avatar } = props

    return (
        <StyledPost style={style}>
            <PostHeader>
                {avatar}
                <Flex column jc="center">
                    <Title weight="600" size="1.2rem">{contact}</Title>
                    <Text color="#B0B0B0" size=".9rem">{time}</Text>
                </Flex>
            </PostHeader>
            <PostBody text={type === 'text'}>
                {
                    type === 'completed-card' && <PostCompletedCard>
                        <Title color="white" size="1.8rem">Completed</Title>
                        <Text color="white" size="1.3rem" mb=".5rem">Cardio Blast</Text>
                        <Flex ai="center">
                            <img src={clock} alt="time" style={{ marginRight: '.5rem' }} />
                            <Text color="white" size="1rem">45 min</Text>
                        </Flex>
                    </PostCompletedCard>
                }
                {
                    type === 'vote' && <PostVote>
                        <header>
                            <Title size="1.5rem" center>What challenge do you want next?</Title>
                        </header>
                        <ProgressBar mb={'.6rem'} title="Abs Challenge" progress={.8} size="big" withText />
                        <ProgressBar mb={'.6rem'} title="Water Challenge" progress={.6} size="big" withText />
                        <ProgressBar mb={'1.5rem'} title="Step Challenge" progress={0} size="big" withText />
                        <Title size="1rem" weight="600">6 days left</Title>
                    </PostVote>
                }
                {
                    text && type === 'text' && <Text size="1rem" weight="600">{text}</Text>
                }
            </PostBody>
            <PostBottom comments={!!shownComments}>
                <PostBottomElement>
                    <img src={heart} alt="like" />
                    <Title>{likes}</Title>
                </PostBottomElement>
                <PostBottomElement>
                    <img src={comment} alt="comment" />
                    <Title>{comments}</Title>
                </PostBottomElement>
                <PostBottomElement last>
                    <img src={repost} alt="repost" />
                </PostBottomElement>
            </PostBottom>
            {
                !!shownComments && shownComments.map(c => (
                    <PostComments>
                        <PostComment>
                            <Flex ai='flex-start'>
                                <Avatar imageAvatarSrc={c.avatarUrl} size={"3.2rem"} />
                            </Flex>
                            <Flex column flex="1">
                                <Flex>
                                    <Title size="1rem" weight='600' mr=".8rem" color="#429FBA">{c.contact}</Title>
                                    <Text size="1rem" color="#C6C6C6">{c.time}</Text>
                                </Flex>
                                <Text size="1rem" mb=".6rem" color="#2D2D2D">{c.text}</Text>
                                {
                                    c.likes && <Flex ai='center' mb='.8rem'>
                                        <PostBottomElement>
                                            <img src={heart} alt="like" />
                                            <Title>{c.likes}</Title>
                                        </PostBottomElement>
                                        <Title size="1rem" weight="400" color='#636363'>Reply</Title>
                                    </Flex>
                                }
                                <Flex>
                                    <CommentsInput placeholder='Reply' />
                                    <SendButton />
                                </Flex>
                            </Flex>
                        </PostComment>
                        <Flex>
                            <CommentsInput placeholder='Comment' />
                            <SendButton />
                        </Flex>
                    </PostComments>
                ))
            }
        </StyledPost>
    )
}

const StyledPost = styled.div`
    width: calc(100% - 3rem);
    background: #FFFFFF;
    box-shadow: 0px 4.13333px 20.6667px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    padding-top: 0;
`

const PostHeader = styled.header`
    border-bottom: 1px solid rgba(169, 169, 169, 0.1);
    padding: 1rem 0;
    display: flex;
`

const PostBody = styled.header<{ text?: boolean }>`
    ${p => p.text ? `
        padding: 1rem 0;
    ` : ''}
`

const PostBottom = styled.div<{ comments?: boolean }>`
    width: 100%;
    display: flex;

    ${p => p.comments ? `
        border-bottom: 1px solid rgba(169, 169, 169, 0.1);
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    ` : ''}
`

const PostBottomElement = styled.div<{ last?: boolean }>`
    display: flex;
    align-items: center;
    padding: .25rem 1.5rem;
    padding-left: 0;

    && > span {
        font-weight: 500;
        font-size: 1rem;
        color: #636363;
    }

    && > img {
        margin-right: .6rem;
    }

    ${p => p.last ? `
        flex: 1;
        justify-content: flex-end;
        padding-right: 0;
        && > img {
            margin-right: 0;
        }
    ` : ''}
`

const PostCompletedCard = styled.div`
    background-image: url(${cardBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 1rem;
    margin: 1rem 0 2rem 0;
`

const PostComments = styled.div`

`

const PostComment = styled.div`
    display: flex;
    margin-bottom: 1rem;;
`

const PostVote = styled.div`
    margin-bottom: 1.5rem;
    && > header > span {
        width: 100%;
    }

    && > header {
        margin: 2rem 0;
        display: flex;
        justify-content: center;
    }
`

const CommentsInput = styled.input`
    background: #F8F8F8;
    border-radius: .8rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 18px;
    border: 0;
    padding: 1rem;
    outline: none;
    flex: 1;

    &&::placeholder {
        color: #B0B0B0;
    }
`

const SendButton = styled.button`
    border: 0;
    outline: none;
    background-image: url(${send});
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #F8F8F8;
    border-radius: 5rem;
    height: 3.5rem;
    width: 3.5rem;
    padding: 1.5rem;
    margin-left: .5rem;
`
