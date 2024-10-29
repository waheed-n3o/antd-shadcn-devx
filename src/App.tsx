import {Button as AntButton, Divider, Space} from 'antd'
import { Select as AntSelect} from "antd";
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import './App.css'

function App() {

  return (
    <>
      <Button variant="outline">Shadcn</Button>
      <AntButton type="primary">Atnd</AntButton>
      <Divider />
 <Space>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Shadcn</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <AntSelect
      defaultValue="antd"
      style={{ width: 120 }}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'antd', label: 'Antd' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
 </Space>

    </>
  )
}

export default App
