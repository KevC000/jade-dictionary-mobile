/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import NavBar from './src/components/nav-bar/NavBar'
import SearchFAB from './src/components/search-fab/SearchFAB'
import { DatabaseProvider, useDatabase } from './src/providers/DatabaseProvider'
import { ThemeName } from './src/components/types/ThemeName'

const App = (): React.JSX.Element => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeName>('light')

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
    setCurrentTheme(nextTheme)
  }
  const database = useDatabase()

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <DatabaseProvider>
        <ApplicationProvider {...eva} theme={{ ...eva[currentTheme], ...theme }}>
          <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
              <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
            </SafeAreaView>
            <SearchFAB />
          </Layout>
        </ApplicationProvider>
      </DatabaseProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
