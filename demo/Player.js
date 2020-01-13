import React from 'react'
import Oplayer from 'oplayer'

export default function Player({ url }) {
  return <Oplayer source={{ uri: url }} />
}
