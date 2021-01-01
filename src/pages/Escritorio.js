import React from 'react';
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const Escritorio = () => {
    const salir = () => {
        console.log('Salir');
    }

    const siguienteTicket = () => {
        console.log('siguienteTicket');
    }
    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>Adrián</Title>
                    <Text>Usted está trabajando en el escritorio: </Text>
                    <Text type="success">5</Text>
                </Col>
                <Col span={4} align="right">
                    <Button shape="round" type="danger" onClick={salir}>
                        <CloseOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col>
                    <Text>Está atendiendo el ticket número: </Text>
                    <Text
                        style={{ fontSize: 30 }}
                        type="danger">
                        55
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        onClick={siguienteTicket}
                        shape="round"
                        type="primary"
                    >
                        <RightOutlined />
                        Siguiente
                    </Button>
                </Col>
            </Row>
        </>
    )
}
