import React from 'react'
import { Layout, Row, Anchor, Button, Icon } from 'antd'
import Logo from '../Logo'
import DocsNav from '../DocsNav'
import '../style.css'

const ButtonGroup = Button.Group

const { Content, Sider } = Layout

export const UtilNav = () => {
  let version = '0.0.1'
  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => window.open(`https://github.com/dxee/p-note/tree/${version}`)} type="default">
          {version} <Icon type="branches" />
        </Button>
        <Button onClick={() => window.open('https://github.com/dxee/p-note')} type="default">
          <Icon type="github" /> GitHub
        </Button>
      </ButtonGroup>
    </div>
  )
}

const SiteLayout = ({ children, location = null }) => (
  <Layout>
    <Sider breakpoint="md" collapsedWidth="0" width={300}>
      <Row type="flex" justify="center" align="middle">
        <Logo size={60} />
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ marginBottom: '1rem' }}
      >
        <UtilNav />
      </Row>
      <Anchor offsetTop={0}>
        <DocsNav location={location} />
      </Anchor>
    </Sider>
    <Layout
      style={{
        minHeight: 'calc( 100vh )',
      }}
    >
      <Content style={{ margin: '0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {children}
        </div>
      </Content>
    </Layout>
  </Layout>
)

export default SiteLayout
