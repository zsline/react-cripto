import React from 'react'
import { Layout, Typography } from 'antd';
import { useCrypto } from '../../context/crypto-context'
import PortfolioChart from '../PortfolioChart';
import AssetsTable from '../AssetsTable';
const ContentStyle = {
    padding: 24, 
    height: 'calc(100vh - 60px - 24px)',
    background: '#001529',
    color: '#a6dbfb',
    borderRadius: 8,
    position: 'sticky',
    top: 12
  }

export default function AppContent() {
  const {assets, crypto} = useCrypto()
  return (
    <Layout.Content style={ContentStyle}>
      <Typography.Title style={{color: '#a6dbfb'}} level={2}>
        Portfolio: ${assets.map(asset => {
          const coin = crypto.find(c => c.id === asset.id)
          return asset.amount * coin.price
        }).reduce((acc, v) => acc += v, 0).toFixed(2)}
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  )
}
