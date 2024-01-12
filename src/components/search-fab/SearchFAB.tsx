import { Button, Icon } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'


type Props = {}


const SearchFAB = ({}: Props) => {

  return (
    <TouchableOpacity
      onPress={() => {
      }}
    >
      <Button
        style={styles.fab}
        status="primary"
        accessoryLeft={(props) => <Icon {...props} name="search-outline" />}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    borderRadius: 28,
    width: 56,
    height: 56
  }
})

export default SearchFAB
