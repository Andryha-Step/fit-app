import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TabSwitcher, TabSwitcherProps, Tab } from '../components/Atoms'

interface TabSwitcherHook {
    tabSwitcher: JSX.Element
}

interface TabSwitcherHookArgs {
    tabs: Array<Tab>,
    tabSwitcherProps?: TabSwitcherProps,
}

export default function useTabSwitcher(tabSwitcherArgs: TabSwitcherHookArgs): TabSwitcherHook {

    const { tabs, tabSwitcherProps  } = tabSwitcherArgs

    const [currentTab, setTab] = useState<string | number>(tabs[0]?.id)

    useEffect(() => {
        console.log(tabs.find(tab => tab.id === currentTab))
        if (!currentTab || !tabs.find(tab => tab.id === currentTab)) {
            setTab(tabs[0]?.id)
        }
    }, [tabs, currentTab])

    if (!tabs || !tabs[0]) {
        return {
            tabSwitcher: <></>
        };
    }

    const tabSwitcher = (
        <TabSwitcher
            {...tabSwitcherProps}
            tabs={tabs}
            currentTab={currentTab}
            onSwitch={setTab}
        />
    )

    return {
        tabSwitcher
    }
}

