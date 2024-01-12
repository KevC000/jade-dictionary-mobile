import { Icon, IconElement, IconProps, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import JadeDrawer from '../drawer/Drawer'
import { useAppTheme } from '../../providers/ThemeContextProvider '
import { ThemeName } from '../types/ThemeName'

type Props = {
  currentTheme: ThemeName,
  toggleTheme: () => void
}

const NavBar = ({currentTheme, toggleTheme}:Props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  const MenuIcon = (props: IconProps): IconElement => {
    return <Icon {...props} name="menu-outline" />
  }

  const ThemeIcon = (props: IconProps): IconElement => {
    const name = currentTheme === 'light' ? 'moon-outline' : 'sun-outline'
    return <Icon {...props} name={name} />
  }

  const renderLeftActions = (): React.ReactElement => {
    return (
      <TopNavigationAction
        icon={MenuIcon}
        onPress={() => {
          setToggleDrawer(!toggleDrawer)
        }}
      />
    )
  }

  const renderRightActions = (): React.ReactElement => {
    return <TopNavigationAction icon={ThemeIcon} onPress={toggleTheme} />
  }

  return (
    <>
      <TopNavigation
        alignment="center"
        style={styles.topNav}
        title={(evaProps) => (
          <Image
            {...evaProps}
            source={require('../../../assets/images/jade-logo.png')} // Use require for local images
            style={styles.logo} // Adjust the size as needed
          />
        )}
        accessoryLeft={() => renderLeftActions()}
        accessoryRight={() => renderRightActions()}
      />
      {toggleDrawer ? <JadeDrawer /> : null}
    </>
  )
}

const styles = StyleSheet.create({
  topNav: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    height: 52
  },
  logo: {
    height: 52,
    width: 100
  }
})

export default NavBar
