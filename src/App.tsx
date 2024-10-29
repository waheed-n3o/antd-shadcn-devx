import { Button as AntButton, Divider, Space, Card, Typography, InputNumber, Form as AntForm } from 'antd'
import { Select as AntSelect } from "antd";
import { Button } from "@/components/ui/button"
import { GithubIcon, SunIcon, MoonIcon, HeartIcon, CheckIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import './App.css'

const { Title, Text } = Typography;

function App() {
  const [antForm] = AntForm.useForm();

  const handleDonation = (values: any) => {
    console.log('Donation values:', values);
    // Handle donation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <Title level={3} className="mb-6 text-center">UI Libraries Showcase</Title>
        
        {/* Buttons Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <GithubIcon className="h-4 w-4" />
              Shadcn Button
            </Button>
            
            <AntButton type="primary" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
              Ant Design
            </AntButton>
            
            <Button variant="secondary" className="flex items-center gap-2">
              <SunIcon className="h-4 w-4" />
              Secondary
            </Button>
          </div>

          <Divider className="my-8" />

          {/* Selects Section */}
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Shadcn Select</span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Ant Design Select</span>
              <AntSelect
                defaultValue="antd"
                style={{ width: 180 }}
                options={[
                  { value: 'modern', label: 'Modern Theme' },
                  { value: 'antd', label: 'Classic Ant' },
                  { value: 'custom', label: 'Custom Style' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                className="hover:border-blue-500"
              />
            </div>
          </div>

          {/* Interactive Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card 
              className="hover:shadow-xl transition-shadow duration-300"
              title="Shadcn Section"
            >
              <div className="space-y-4">
                <Button className="w-full" variant="default">
                  Primary Action
                </Button>
                <Button className="w-full" variant="outline">
                  Secondary Action
                </Button>
              </div>
            </Card>

            <Card 
              className="hover:shadow-xl transition-shadow duration-300"
              title="Ant Design Section"
            >
              <div className="space-y-4">
                <AntButton type="primary" className="w-full bg-blue-500 hover:bg-blue-600">
                  Primary Action
                </AntButton>
                <AntButton className="w-full" type="default">
                  Secondary Action
                </AntButton>
              </div>
            </Card>
          </div>
        </div>

        <Divider className="my-8">
          <HeartIcon className="inline-block h-5 w-5 text-red-500" />
        </Divider>

        <div className="max-w-md mx-auto">
          <Title level={4} className="text-center mb-6">
            Support Our Project
          </Title>

          <AntForm
            form={antForm}
            onFinish={handleDonation}
            layout="vertical"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <AntForm.Item
                name="currency"
                label="Currency"
                rules={[{ required: true, message: 'Please select currency' }]}
              >
                <AntSelect
                  className="w-full"
                  options={[
                    { value: 'USD', label: '🇺🇸 USD' },
                    { value: 'EUR', label: '🇪🇺 EUR' },
                    { value: 'GBP', label: '🇬🇧 GBP' },
                    { value: 'JPY', label: '🇯🇵 JPY' },
                  ]}
                  placeholder="Select currency"
                />
              </AntForm.Item>

              <AntForm.Item
                name="amount"
                label="Amount"
                rules={[{ required: true, message: 'Please enter amount' }]}
              >
                <InputNumber
                  className="w-full"
                  min={1}
                  placeholder="Enter amount"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                />
              </AntForm.Item>
            </div>

            <AntForm.Item
              name="donationType"
              label="Donation Type"
              rules={[{ required: true, message: 'Please select donation type' }]}
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'oneTime', label: 'One-time donation', description: 'Single contribution' },
                  { value: 'monthly', label: 'Monthly support', description: 'Recurring monthly' },
                  { value: 'yearly', label: 'Yearly support', description: 'Recurring yearly' }
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-md ${
                      antForm.getFieldValue('donationType') === option.value
                        ? 'border-blue-500 bg-blue-200/50'
                        : 'border-gray-200'
                    }`}
                    onClick={() => antForm.setFieldsValue({ donationType: option.value })}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{option.label}</h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                      {antForm.getFieldValue('donationType') === option.value && (
                        <CheckIcon className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AntForm.Item>

            <div className="flex gap-4 justify-center mt-6">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => antForm.resetFields()}
              >
                Reset
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                onClick={() => antForm.submit()}
              >
                Donate Now
              </Button>
            </div>

            <Text className="block text-center text-sm text-gray-500 mt-4">
              All donations are secure and encrypted
            </Text>
          </AntForm>
        </div>
      </Card>
    </div>
  )
}

export default App
