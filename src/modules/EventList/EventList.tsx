import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { EventProps } from '../../types'
import { EventPreview } from './components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1f0',
    paddingTop: 10,
  },
})

export const EventList: React.FC = () => {
  const data: EventProps[] = [
    {
      date: '22-11-2022',
      createdBy: '4llower',
      description: 'Hi there, this is test event',
      name: 'MMA Botaem',
      eventUsers: ['4llower', 'max', 'tsudd', 'slavik175cm'],
      status: 'notStarted',
      tags: ['mma', 'try hard'],
      photo:
        'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
    },
    {
      date: '22-11-2022',
      createdBy: '4llower',
      description: 'Hi there   , this is test event',
      name: 'MMA Botaem',
      eventUsers: ['4llower', 'max', 'tsudd', 'slavik175cm'],
      status: 'notStarted',
      tags: ['mma', 'try hard'],
    },
    {
      date: '22-11-2022',
      createdBy: '4llower',
      description: 'Hi there, this is test event',
      name: 'MMA Botaem',
      eventUsers: ['4llower', 'max', 'tsudd', 'slavik175cm'],
      status: 'notStarted',
      tags: ['mma', 'try hard'],
    },
    {
      date: '22-11-2022',
      createdBy: '4llower',
      description: 'Hi there, this is test event',
      name: 'MMA Botaem',
      eventUsers: ['4llower', 'max', 'tsudd', 'slavik175cm'],
      status: 'notStarted',
      tags: ['mma', 'try hard'],
    },
    {
      date: '22-11-2022',
      createdBy: '4llower',
      description: 'Hi there, this is test event',
      name: 'MMA Botaem',
      eventUsers: ['4llower', 'max', 'tsudd', 'slavik175cm'],
      status: 'notStarted',
      tags: ['mma', 'try hard'],
    },
    {
      date: '22-11-2022',
      createdBy: '4llower',
      description: 'Hi there, this is test event',
      name: 'MMA Botaem',
      eventUsers: ['4llower', 'max', 'tsudd', 'slavik175cm'],
      status: 'notStarted',
      tags: ['mma', 'try hard'],
    },
    {
      date: '22-11-2022',
      createdBy: '4llower',
      description: 'Hi there, this is test event',
      name: 'MMA Botaem',
      eventUsers: ['4llower', 'max', 'tsudd', 'slavik175cm'],
      status: 'notStarted',
      tags: ['mma', 'try hard'],
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({ item }) => <EventPreview {...item} key={item.name} />} />
    </View>
  )
}
