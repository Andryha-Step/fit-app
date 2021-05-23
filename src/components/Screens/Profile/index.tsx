import React from 'react'
import styled from 'styled-components'
import Flex from '../../Blocks/Flex'
import Avatar from '../Chat/Avatar'
import avatar from '../../../assets/images/example-avatar-4.png'
import { TabSwitcher, Title, useTabSwitcher } from '../../Atoms'
import Stats from './Stats'
import Activity from './Activity'

export interface ProfileProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Profile(props: ProfileProps): JSX.Element {

    const { style } = props
    const PageSwitcher = useTabSwitcher({
        tabs: [
            {
                title: 'Stats',
                id: 'stats'
            },
            {
                title: 'Activity',
                id: 'activity'
            }
        ]
    })

    const handleAvatarEdit = () => {

    }

    return (
        <StyledProfile style={style}>
            <Header jc='center' ai='center' column>
                <Avatar imageAvatarSrc={avatar} size={'8rem'} onEditClick={handleAvatarEdit} />
                <Title mt='1rem' mb='2rem' size='1.5rem' weight='600'>Marho Gere</Title>
                <Flex>
                    <TabSwitcher
                        {...PageSwitcher.tabSwitcherProps}
                        customTab={({ tab, active, onClick }) => (
                            <TabSwticherCustomTab key={tab.id} id={tab.id + ''} onClick={onClick} active={active}>
                                <Title
                                    id={tab.id + ''}
                                    size={'1rem'}
                                    weight={'600'}
                                >{tab.title}</Title>
                            </TabSwticherCustomTab>
                        )}
                    />
                </Flex>
            </Header>
            {
                PageSwitcher.currentTab === 'stats' && <Stats />
            }
            {
                PageSwitcher.currentTab === 'activity' && <Activity />
            }
        </StyledProfile>
    )
}

const StyledProfile = styled.div`
    padding: 0 1.5rem;
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

const Header = styled(Flex)`
    padding: 2rem 0;
`

const TabSwticherCustomTab = styled.div<{ active?: boolean }>`
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    border-radius: 5rem;
    cursor: pointer;

    & > img {
        vertical-align: middle;
        margin-right: 0.5rem;
        padding-bottom: 2px;
    }

    ${p => p.active ? `
        background: rgba(48, 143, 171, 0.2);
    ` : `
        background: #F8F8F8;
    `}
`