import React from 'react'
import SiteLayout from '../components/SiteLayout'
import Seo from '../components/Seo'
import { Link } from 'gatsby'
import { List, Card, Row, Icon, Divider } from 'antd'
import { docsNavList } from '../utils/nav'
const IndexPage = ({ location }) => (
  <SiteLayout location={location}>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Row type="flex" justify="center">
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1>P-NOTE</h1>
        <h3
          style={{
            marginTop: 0,
          }}
        >
          MDX笔记本.
        </h3>
        <p>
          记录日常工作信息， 方便快速查找.
        </p>
      </div>
      <Divider />
    </Row>
    <Row>
      <List
        dataSource={docsNavList}
        grid={{ gutter: 16, column: 1 }}
        renderItem={item => (
          <List.Item>
            <Card
              style={{
                textAlign: 'center',
              }}
              bordered={false}
            >
              <Icon
                style={{
                  fontSize: '6rem',
                  marginBottom: '2rem',
                  marginTop: '3rem',
                }}
                theme="twoTone"
                type={item.icon}
              />
              <Divider
                style={{
                  fontSize: '2rem',
                  marginBottom: '2rem',
                }}
              >
                <span>{item.title}</span>
              </Divider>
              <div
                style={{
                  textAlign: 'left',
                }}
              >
                <List
                  dataSource={item.items}
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                  }}
                  renderItem={subItem => (
                    <List.Item key={subItem.id}>
                      <Link to={'/' + item.directory + '/' + subItem.id}>
                        <Icon type="link" /> {subItem.title}
                      </Link>
                    </List.Item>
                  )}
                />
              </div>
            </Card>
          </List.Item>
        )}
      />
    </Row>
  </SiteLayout>
)

export default IndexPage
