import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Spinner() {
    const antIcon = <LoadingOutlined style={{ fontSize: "450%",color:"red" }} spin />;
  return (
    <div>
      <Spin  indicator={antIcon} />
    </div>
  )
}
