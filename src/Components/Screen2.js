import { Button, Row, Col, Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Screen2(props) {
    const history = useHistory();

    const player1Name = useState(history.location.state?.player1Name);
    const player2Name = useState(history.location.state?.player2Name);
    const [player1Win, setPlayer1Win] = useState(0);
    const [player2Win, setPlayer2Win] = useState(0);

    useEffect(() => {
        if (!player1Name || player1Name === '' || !player2Name || player2Name === '') {
            history.push('/');
        }
    });

    const handlePlayer1Game = () => setPlayer1Win(player1Win + 1);

    const handlePlayer2Game = () => setPlayer2Win(player2Win + 1);


    return (
        <Layout>
            <Layout.Content>
                <Row className='full-screen-height'>
                    <Col xs={3} sm={3} md={9} />
                    <Col xs={18} sm={18} md={6} className='column-center'>
                        <div className='login-container'>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>
                                    {player1Name}
                                </span>
                                <Button
                                    onClick={() => handlePlayer1Game()}
                                >
                                    Add Win
                                </Button>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>
                                    Wins:
                                </span>
                                <span>
                                    {player1Win}
                                </span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>
                                    {player2Name}
                                </span>
                                <Button
                                    onClick={() => handlePlayer2Game()}
                                >
                                    Add Win
                                </Button>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>
                                    Wins:
                                </span>
                                <span>
                                    {player2Win}
                                </span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>
                                    Current Winner:
                                </span>
                                <span>
                                {player1Win > player2Win ? player1Name : (player2Win > player1Win ? player2Name : 'Draw')}
                                </span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
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