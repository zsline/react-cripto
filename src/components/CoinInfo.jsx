
import React from 'react'
import { Flex, Typography } from 'antd'
export default function CoinInfo({coin, withSimbol}) {
  return (
    <Flex gap={12}>
    <img style={{width: 40}} src={coin.icon} alt={coin.label} /><Typography.Title level={2} style={{margin:0}}>{withSimbol && <span>({coin.symbol})</span>} {coin.name}</Typography.Title>
  </Flex>
  )
}
