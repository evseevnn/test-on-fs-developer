import React, { ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TopNavigation from '../components/TopNavigation';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'Test for Fullstack Developer',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <TopNavigation />
    <Container fluid>
      <Row className="pt-3">
        <Col>{children}</Col>
      </Row>
    </Container>
  </div>
);

export default Layout;
