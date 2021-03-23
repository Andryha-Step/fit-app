import React from 'react';
import FullWidthCard from '../../Blocks/ForYou/FullWidthCard';
import Header from '../../Blocks/Global/Header';


interface ForYouScreenProps {

}

export default function ForYou(props:ForYouScreenProps): JSX.Element {
    return (
        <div>
            <Header search/>
            <FullWidthCard />
        </div>
    )
}