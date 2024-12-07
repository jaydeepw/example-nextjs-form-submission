"use client";

import { Button, Checkbox, Form, Input } from "antd";
import FormHeader from "./FormHeader";

export default function UsingAntdFormsLibraryV2() {
  // const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="p-8 w-full max-w-md flex items-start justify-center">
      <div>
        <FormHeader title={"Using Antd Forms"} />

        <Form
          onFinish={onFinish}
          className="space-y-4"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="fullname"
            label={<label className="text-white">Fullname</label>}
            rules={[{ required: true, message: "Fullname field is required" }]}
          >
            <Input
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 
              rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label={<label className="text-white">Email</label>}
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 
              rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<label className="text-white">Password</label>}
            rules={[
              { required: true, message: "Password is required" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 
              rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label={<label className="text-white">Phone Number</label>}
            rules={[{ required: true, message: "Phone number is required" }]}
          >
            <Input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 
              rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </Form.Item>

          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "You must accept the terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox className="text-white">
              I agree to the Terms and Conditions
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg 
              hover:bg-blue-600 transition-colors font-medium"
            >
              Submit Form
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
