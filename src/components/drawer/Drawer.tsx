import React from 'react'
import { Drawer, DrawerItem, IndexPath } from '@ui-kitten/components'

type Props = {}

const JadeDrawer = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0))

  const renderHeader = () => {
	  return <>
	  
	  </>
  }

  return (
    <Drawer selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)} >
      <DrawerItem title="Home" />
      <DrawerItem title="Lists" />
      <DrawerItem title="Practice" />
      <DrawerItem title="Support" />
    </Drawer>
  )
}

export default JadeDrawer
