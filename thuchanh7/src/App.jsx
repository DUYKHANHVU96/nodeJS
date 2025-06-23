import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import Errormessage from './component/Errormessage';
import { SpaceContext } from 'antd/es/space';
import { GlobalOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const App = () => (
  <div className="flex w-full h-screen items-center justify-center">
    <div className='p-8 max-w-lg mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
      <h2 className='text-xl mb-6 text-black-900 '>Let's get your started</h2>
      <Form
        name="basic"
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Full name"
          name="fullname"
        >
          <Input prefix={<UserOutlined />} />
          <Errormessage message="This is the name you'll use on your profile." />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
        >
          <Input prefix={<MailOutlined />} />
          <Errormessage message="This is the name you'll use on your profile." />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phoneNumber"
        >
          <Input prefix={<PhoneOutlined />} />
          <Errormessage message="This is the name you'll use on your profile." />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
        >
          <Input.Password prefix={<LockOutlined />} />
          <Errormessage message="This is the name you'll use on your profile." />
        </Form.Item>

        <Form.Item
          label={
            <span className='flex items-center gap-1'>
              <span>Location</span>
              <span className='text-[10px] text-gray-500'>(Optional)</span>
            </span>
          }
          name="location"
        >
          <Select prefix={<GlobalOutlined />}
            className="w-full"
            defaultValue="Vietnam"
            name="location"
            options={[
              { value: 'vietnam', label: 'Vietnam' },
              { value: 'japan', label: 'Japan' },
              { value: 'laos', label: 'Laos' },
              { value: 'china', label: 'Chine' },
            ]}
          />
          <Errormessage message="This is the name you'll use on your profile." />
        </Form.Item>


        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className='w-full'>
            Submit
          </Button>
        </Form.Item>
      </Form>


      <div className='mt-4 text-center'>
        <p className='text-sm text-gray-500'>
          Already have an account? <a href='/login' className='text-blue-500'>Login</a>
        </p>
      </div>
    </div>
  </div>


);
export default App;