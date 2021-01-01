import { Col, Row, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

export const CrearTicket = () => {
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>
            Presione el botón para generar un nuevo ticket
          </Title>
        </Col>
      </Row>
    </>
  );
};
