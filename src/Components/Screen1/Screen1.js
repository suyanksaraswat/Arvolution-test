import { Button, Input, Form, message, Row, Col, Layout } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Screen1(props) {
    const history = useHistory();

    const onFinish = (values) => {
        history.push('/game', { player1Name: values.player1Name, player2Name: values.player2Name });
    }

    const onFinishFailed = errorInfo => {
        message.error('Enter correct name');
    };

    return (
        <Layout>
            <Layout.Content>
                <Row className='full-screen-height'>
                    <Col xs={3} sm={3} md={9} />
                    <Col xs={18} sm={18} md={6} className='column-center'>
                        <div className='login-container'>
                            <div className='text-center mb-50'>
                                <h2>Arvolution Game</h2>
                            </div>
                            <Form
                                name='basic'
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name="player1Name"
                                    rules={[{ required: true, message: 'Please input player 1 name!' }]}
                                >
                                    <Input placeholder="Player 1 Name" />
                                </Form.Item>
                                <Form.Item
                                    name="player2Name"
                                    rules={[{ required: true, message: 'Please input player 2 name!' }]}
                                >
                                    <Input placeholder="Player 2 Name" />
                                </Form.Item>
                                <Form.Item className='text-center'>
                                    <Button type="primary" htmlType="submit" className='w-100'>
                                        Continue
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={9} />
                </Row>
            </Layout.Content>
        </Layout>
    );
}
    
export default Screen1;