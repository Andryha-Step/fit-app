import React from 'react'
import styled from 'styled-components'
import Flex from '../../Blocks/Flex'
import Avatar from '../Chat/Avatar'
import star from '../../../assets/icons/star.svg'
import { Text, Title } from '../../Atoms'

export interface ReviewProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    username: string
    avatarUrl: string
    stars: number
    body: string
}

export default function Review(props: ReviewProps): JSX.Element {

    const { style, stars, avatarUrl, body, username } = props

    return (
        <StyledReview style={style}>
            <Flex jc={'space-between'} mb={'1rem'}>
                <Flex>
                    <Avatar
                        imageAvatarSrc={avatarUrl}
                        size={'2.5rem'}
                    />
                    <div>
                        <Title size={'.8rem'} weight={'500'}>{username}</Title>
                        <Flex>
                            {
                                Array(stars).fill((
                                    <img src={star} alt={'star'} style={{ height: '.8rem' }} />
                                ))
                            }
                        </Flex>
                    </div>
                </Flex>
                <Flex ai={'center'}>
                    <Text color={'#B4B4B4'}>2 hours ago</Text>
                </Flex>
            </Flex>
            <Text color={'#636363'}>{body}</Text>
        </StyledReview>
    )
}

const StyledReview = styled.div`
    background: white;
    box-shadow: 0px 4.12444px 20.6222px rgba(0, 0, 0, 0.05);
    min-width: 16rem;
    margin-right: 1.5rem;
    border-radius: .5rem;
    padding: 1rem;
`