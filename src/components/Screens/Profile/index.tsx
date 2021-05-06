import React from 'react'
import styled from 'styled-components'
import Flex from '../../Blocks/Flex'
import Avatar from '../Chat/Avatar'
import avatar from '../../../assets/images/example-avatar-4.png'
import { TabSwitcher, Title, useTabSwitcher } from '../../Atoms'
import Stats from './Stats'

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

    return (
        <StyledProfile style={style}>
            <Header jc='center' ai='center' column>
                <Avatar imageAvatarSrc={avatar} size={'8rem'} />
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
            {/* {
                PageSwitcher.currentTab === 'activity' && <Stats />
            } */}
        </StyledProfile>
    )
}

const StyledProfile = styled.div`
    padding: 0 1.5rem;
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