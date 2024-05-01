'use client'
import Link from 'next/link'
import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Button, Avatar, Card } from 'antd';
import Image from 'next/image';

const { Meta } = Card;

const Projects = () => {
  return (
    <div>
        <h1>All Projects</h1>
        <div>
        <Card
    style={{ width: 300 }}
    cover={
      <Image
        alt="example"
        src=""
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
        </div>
        <div>
        <Link href="/projects/:details"><Button type="primary">Primary Button</Button></Link>
        </div>
        </div>
  )
}

export default Projects