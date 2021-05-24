import React from 'react'
import styled from 'styled-components'
import { Button, TabSwitcher, Title, useTabSwitcher } from '../../../Atoms'
import BackHeader from '../../../Blocks/BackHeader'
import editProfile from '../../../../assets/icons/Settings/edit-profile.svg'
import membership from '../../../../assets/icons/Settings/membership.svg'
import notifications from '../../../../assets/icons/Settings/notifications.svg'
import weight from '../../../../assets/icons/Settings/weight.svg'
import height from '../../../../assets/icons/Settings/height.svg'
import faqs from '../../../../assets/icons/Settings/faqs.svg'
import leaveFeedback from '../../../../assets/icons/Settings/leave-feedback.svg'
import termsOfService from '../../../../assets/icons/Settings/terms-of-service.svg'
import privacyPolicy from '../../../../assets/icons/Settings/privacy-policy.svg'
import logOut from '../../../../assets/icons/Settings/log-out.svg'
import arrow from '../../../../assets/icons/arrow-right.svg'
import { Link } from 'react-router-dom'

export interface SettingsProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Settings(props: SettingsProps): JSX.Element {

    const { style } = props
    const weightSwitcher = useTabSwitcher({
        tabs: [{
            title: 'KG',
            id: 'kg'
        },
        {
            title: 'LBS',
            id: 'lbs'
        }],
        layoutStyle: 'header-bottom',
    });
    const heightSwither = useTabSwitcher({
        tabs: [{
            title: 'CM',
            id: 'kg'
        },
        {
            title: 'FT & IN',
            id: 'ft_in'
        }],
        layoutStyle: 'header-bottom',
    });

    return (
        <StyledSettings style={style}>
            <BackHeader backLink='/app/profile'>
                <Title weight="600" size='1.5rem'>Settings</Title>
            </BackHeader>
            <Category>
                <Title weight="600">Account</Title>
                <Link to='/app/profile/settings/edit-profile'>
                    <CategoryElement icon={editProfile}>
                        <Title weight="400" size="1.2rem">Edit profile</Title>
                    </CategoryElement>
                </Link>
                <Link to='/app/profile/settings/membership'>
                    <CategoryElement icon={membership}>
                        <Title weight="400" size="1.2rem">Membership</Title>
                    </CategoryElement>
                </Link>
                <Link to='/app/profile/settings/notifications'>
                    <CategoryElement icon={notifications}>
                        <Title weight="400" size="1.2rem">Notifications</Title>
                    </CategoryElement>
                </Link>
            </Category>
            <Category>
                <Title weight="600">Units</Title>
                <CategoryElement icon={weight} noArrow>
                    <Title weight="400" size="1.2rem">Weight</Title>
                    <TabSwitcher
                        {...weightSwitcher.tabSwitcherProps}
                        width='unset'
                        customTab={
                            (props) =>
                                <CustomTab id={props.tab.id + ''} {...props}>
                                    <Title id={props.tab.id + ''} size='1rem' weight="500" color={props.active ? 'white' : 'black'}>
                                        {props.tab.title}
                                    </Title>
                                </CustomTab>
                        }
                    />
                </CategoryElement>
                <CategoryElement icon={height} noArrow>
                    <Title weight="400" size="1.2rem">Height</Title>
                    <TabSwitcher
                        {...heightSwither.tabSwitcherProps}
                        width='unset'
                        customTab={
                            (props) =>
                                <CustomTab id={props.tab.id + ''} {...props}>
                                    <Title id={props.tab.id + ''} size='1rem' weight="500" color={props.active ? 'white' : 'black'}>
                                        {props.tab.title}
                                    </Title>
                                </CustomTab>
                        }
                    />
                </CategoryElement>
            </Category>
            <Category>
                <Title weight="600">Help</Title>
                <Link to='/app/profile/settings/faqs'>
                    <CategoryElement icon={faqs}>
                        <Title weight="400" size="1.2rem">FAQS</Title>
                    </CategoryElement>
                </Link>
                <Link to='/app/profile/settings/leave-feedback'>
                    <CategoryElement icon={leaveFeedback}>
                        <Title weight="400" size="1.2rem">Leave feedback</Title>
                    </CategoryElement>
                </Link>
            </Category>
            <Category>
                <Title weight="600">Legal</Title>
                <Link to='/app/profile/settings/terms-of-service'>
                    <CategoryElement icon={termsOfService}>
                        <Title weight="400" size="1.2rem">Terms of Service</Title>
                    </CategoryElement>
                </Link>
                <Link to='/app/profile/settings/privacy-policy'>
                    <CategoryElement icon={privacyPolicy}>
                        <Title weight="400" size="1.2rem">Privacy Policy</Title>
                    </CategoryElement>
                </Link>
                <Link to='/app/profile/settings/logout'>
                    <CategoryElement icon={logOut}>
                        <Title weight="400" size="1.2rem" color="#429FBA">Log Out</Title>
                    </CategoryElement>
                </Link>
            </Category>
        </StyledSettings>
    )
}

const StyledSettings = styled.div`
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

const Category = styled.div`
    padding: 1rem 0;

    && a {
        text-decoration: none;
    }
`

const CategoryElement = styled.div<{ icon: string, noArrow?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${p => p.icon});
    background-repeat: no-repeat;
    padding: 1rem 0;
    padding-left: 2.5rem;
    background-position: 0 center;
    background-size: 1.3rem;
    position: relative;

    border-bottom: 1px solid #F6F6F6;

    &&::after {
        content: ' ';
        height: 2rem;
        width: 3rem;
        background-image: url(${arrow});
        background-repeat: no-repeat;
        filter: invert(1);
        position: absolute;
        right: 0;
        ${p => p.noArrow ? `
            display: none;
        ` : ''}
    }

    && > *:first-child {
        flex: 1;
        display: block;
    }
`

const CustomTab = styled.div<{ active: boolean }>`
    background-color: #F8F8F8;
    padding: .2rem 1rem;
    border-radius: 5rem;
    min-width: 4rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    margin-right: 1rem;

    ${p => p.active ? `
        background: #308FAB;
    ` : ''}
`