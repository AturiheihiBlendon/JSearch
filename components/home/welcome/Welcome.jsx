import React, { useState } from 'react'
import {
  View, Text, TextInput, TouchableOpacity, Image, FlatList
} from 'react-native'
import { COLORS, icons, images, SIZES } from '../../../constants';

import styles from './welcome.style'
import { useRouter } from 'expo-router'

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-type')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi Blendon</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchTerm}
            onChangeText={(text) => { setSearchTerm(text) }}
            placeholder='Are you looking for a job?'
            style={styles.searchInput} />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal />
      </View>
    </View>
  )
}

export default Welcome