import React, { useEffect, useState } from 'react'
import { Layout, Select, Space, Button,Flex, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';
const HeaderStyle = {
    display: 'flex', 
    alignItems: 'center', 
    background: '#001529',
    color: '#a6dbfb',
    height: 60,
    padding: '0 24px',
    width: '100%'
  }
  export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const [coin, setCoin] = useState(null)
  const [modal, setModal] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const {crypto} = useCrypto()
  useEffect(() => {
    const keypress = (event) => {
      if (event.key === '/') {
        setSelect((prev) => !prev);
      }
    };
  
    document.addEventListener('keypress', keypress);
    // Возвращаем функцию для очистки
    return () => {
      document.removeEventListener('keypress', keypress);
    };
  }, []);
  function handleSelect(value){
    setCoin(crypto.find(c => c.id == value))
    setModal(true)
  }
  return (
    <Layout.Header style={HeaderStyle}>
      <Flex gap="small" justify="space-between" style={{width: '100%'}}>
        <Select
        style={{ width: 250 }}
        open={select}
        onClick={() => setSelect((prev) => !prev)}
        onSelect={handleSelect}
        value="press / to open"
        options={crypto.map(coin => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon
        }))}
        optionRender={(option) => (
        <Space>
          <img style={{width: 20}} src={option.data.icon} alt={option.data.label} /> {option.data.label}
        </Space>
      )}
    />
    <Button type='primary' onClick={() => setDrawer(true)}>Add Asset</Button>
    <Modal
        open={modal}
        onCancel={() => setModal(false)}
        footer={null}
      >
        <CoinInfoModal coin={coin} />
      </Modal>
      <Drawer
        title="Add Asset"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={() => setDrawer(false)}
        open={drawer}
        destroyOnHidden
      >
        <AddAssetForm onClose={() => setDrawer(false)} />
      </Drawer>
  </Flex>
  </Layout.Header>
  )
}
