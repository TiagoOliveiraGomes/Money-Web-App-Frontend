export function selectTab(tabId){
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabsIds){
    const tabToShow = {}
    tabsIds.forEach(item => tabToShow[item] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabToShow
    }
}