/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { ApplicationProvider, Icon, IconRegistry, Layout, TopNavigation } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { default as theme } from './theme.json'

function App(): React.JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <Layout>
        <SafeAreaView>
          <TopNavigation title="Jade" alignment="center" style={styles.topNav} />
        </SafeAreaView>
      </Layout>
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  topNav: {
    backgroundColor: theme['color-primary-500']
  }
})

export default App
