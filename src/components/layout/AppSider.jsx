import React, { useContext } from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Layout, Card, Statistic, List, Typography, Tag } from 'antd';
import { capitalize } from '../../utils'
import CryptoContext from '../../context/crypto-context';
const SiderStyle = {
    background: "#001529",
    padding: '1rem',
    flex: '0 0 auto',
    marginRight: 12,
    borderRadius: 8
  }
export default function AppSider() {
    const {assets} = useContext(CryptoContext)
  return (
    <Layout.Sider  style={SiderStyle}>
      {assets.map(asset => (
                <Card key={asset.id} style={{marginBottom: '1rem'}}>
                <Statistic
                  title={capitalize(asset.id)}
                  value={asset.totalAmount}
                  precision={2}
                  valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
                  prefix={ asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined /> }
                  suffix="$"
                />
                <List 
                    style={{marginTop:'1rem'}}
                    size='small'
                    dataSource={[
                      {title: 'Total Profit', value: asset.totalProfit, withTag: true},
                      {title: 'Asset Amount', value: asset.amount, isPlain: true},
                      // {title: 'Difference', value: asset.groPercent}
                    ]}
                    renderItem={(item) => (
                    <List.Item>
                      <span>{item.title}</span>
                    <span>
                    {item.withTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.groPercent}%</Tag>}
                    {item.isPlain && item.value}
                    {!item.isPlain && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{item.value.toFixed(2)}$</Typography.Text>}
                    </span>
                    </List.Item>
                )}
                />
                </Card> 
      ))}
  </Layout.Sider>
  )
}
