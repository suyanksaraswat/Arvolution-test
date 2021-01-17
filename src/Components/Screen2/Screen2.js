import { Button, Row, Col, Layout, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Screen2(props) {
    const history = useHistory();

    const player1Name = useState(history?.location?.state?.player1Name);
    const player2Name = useState(history?.location?.state?.player2Name);
    const [player1Win, setPlayer1Win] = useState(0);
    const [player2Win, setPlayer2Win] = useState(0);

    useEffect(() => {
        if (!player1Name || player1Name === '' || !player2Name || player2Name === '') {
            history.push('/');
        }
    });

    return (
        <Layout>
            <Layout.Content>
                <Row className='full-screen-height'>
                    <Col xs={3} sm={3} md={9} />
                    <Col xs={18} sm={18} md={6} className='column-center'>
                        <div className='mb-10'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a onClick={() => history.push('/')}>
                                <ArrowLeftOutlined />&nbsp;Back
                            </a>
                        </div>
                        <div className='login-container'>
                            <div className='display-flex justify-space-between mb-10'>
                                <h1 className='playerName'>
                                    {player1Name}
                                </h1>
                                <span className='addWin-btn'>
                                    <Button
                                        onClick={() => setPlayer1Win(player1Win + 1)}
                                    >
                                        Add Win
                                    </Button>
                                </span>
                            </div>
                            <div className='display-flex justify-space-between mb-20'>
                                <h3>
                                    Wins:
                                </h3>
                                <h1>
                                    {player1Win}
                                </h1>
                            </div>
                            <div className='display-flex justify-space-between mb-10'>
                                <h1 className='playerName'>
                                    {player2Name}
                                </h1>
                                <span className='addWin-btn'>
                                    <Button
                                        onClick={() => setPlayer2Win(player2Win + 1)}
                                    >
                                        Add Win
                                    </Button>
                                </span>
                            </div>
                            <div className='display-flex justify-space-between mb-20'>
                                <h3>
                                    Wins:
                                </h3>
                                <h1>
                                    {player2Win}
                                </h1>
                            </div>
                            <Divider type={'horizontal'} />
                            <div className='display-flex justify-space-between mb-10'>
                                <span>
                                    Current Winner:
                                </span>
                                <span className='playerName'>
                                {player1Win > player2Win ? player1Name : (player2Win > player1Win ? player2Name : 'Draw')}
                                </span>
                            </div>
                            <div className='display-flex justify-space-between'>
                                <span>
                                    Win Difference:
                                </span>
                                <span>
                                    {Math.abs(player1Win - player2Win)}
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={9} />
                </Row>
            </Layout.Content>
        </Layout>
    );
}
    
export default Screen2;