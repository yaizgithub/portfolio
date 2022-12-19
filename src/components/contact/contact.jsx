import { Button, Form, Input } from "antd";
import React from "react";
import MyTitleHeader from "../../pallete/title";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import MyButton from "../../pallete/button";
import "./styleContact.css";

const { TextArea } = Input;

const AppContact = (props) => {
    const [form] = Form.useForm();

    const info = [
        { logo: <FaEnvelope size={20} />, text: "rezerx0@gmail.com" },
        { logo: <FaWhatsapp size={20} />, text: "0877 7498 3068" },
    ];

    return (
        <div id="contact" className="bg-[#E6E6E6] py-16">
            <MyTitleHeader title="Contact" subtitle="Me" />
            <div className="mx-7">
                <div className="container border md:flex md:gap-5 mt-14">
                    <div className="flex-1">
                        <Form
                            size="large"
                            layout="horizontal"
                            form={form}
                            initialValues={{
                                layout: "horizontal",
                            }}
                        >
                            <Form.Item
                                // label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your name!",
                                    },
                                ]}
                            >
                                <Input placeholder="Your Name" />
                            </Form.Item>

                            <Form.Item
                                // label="Username"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your email address!",
                                    },
                                    {
                                        type: "email",
                                        message:
                                            "The input is not valid E-mail!",
                                    },
                                ]}
                            >
                                <Input placeholder="Your Email Address" />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your message!",
                                    },
                                ]}
                            >
                                <TextArea
                                    rows={4}
                                    placeholder="Your Message"
                                    // maxLength={6}
                                />
                            </Form.Item>
                            <Form.Item
                            // wrapperCol={{
                            //     offset: 8,
                            //     span: 16,
                            // }}
                            >
                                {/* <Button
                                    shape="round"
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-blue-600"
                                >
                                    Submit
                                </Button> */}
                                <MyButton caption="Submit" submit="submit" />
                            </Form.Item>
                        </Form>
                    </div>

                    {/* ICON EMAIL */}
                    <div className="flex flex-col gap-5 pr-32">
                        {info.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex gap-3 items-center"
                                >
                                    <div className="text-white bg-primary rounded-full p-3">
                                        {item.logo}
                                    </div>
                                    <span className="text-slate-600">
                                        {item.text}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    {/* END ICON EMAIL */}
                </div>
            </div>
        </div>
    );
};

export default AppContact;
