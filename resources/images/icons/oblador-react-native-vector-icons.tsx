import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const IconName = {
    obladorEntypoNull: 'null',
    obladorEntypoArrowLeft: 'arrow-left',
    obladorEntypoArrowRight: 'arrow-right',
    obladorEntypoPaperPlane: 'paper-plane',
    obladorFeatherGrid: 'grid',
    obladorFeatherSearch: 'search',
    obladorMaterialCommunityIconsPlusMinus: 'plus-minus',
    obladorMaterialCommunityIconsTableOfContents: 'table-of-contents',
    obladorMaterialCommunityIconsWeb: 'web',
}

const IconImageView = (props: { name: any; size: number }) => {
    const iconName = props.name
    const size = props.size || 20

    switch (iconName) {
    case IconName.obladorEntypoArrowLeft:
    case IconName.obladorEntypoArrowRight:
    case IconName.obladorEntypoPaperPlane:
        return <Entypo name={iconName} size={size} />
    case IconName.obladorFeatherGrid:
    case IconName.obladorFeatherSearch:
        return <Feather name={iconName} size={size} />
    case IconName.obladorMaterialCommunityIconsPlusMinus:
    case IconName.obladorMaterialCommunityIconsTableOfContents:
    case IconName.obladorMaterialCommunityIconsWeb:
        return <MaterialCommunityIcons name={iconName} size={size} />
    }
}

export {
    IconName,
    IconImageView
}
