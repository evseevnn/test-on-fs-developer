import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useRouter } from 'next/router';

const isActive = (url: String): boolean => {
  const router = useRouter();
  return router.pathname === url;
};

const TopNavigation = () => (
  <Navbar bg="dark" variant="dark">
    <Link href="/" passHref>
      <Navbar.Brand>Home</Navbar.Brand>
    </Link>

    <Nav className="mr-auto">
      <Link href="/books" passHref>
        <Nav.Link className={isActive('/books') && 'active'}>Books</Nav.Link>
      </Link>
      <Link href="/tickers" passHref>
        <Nav.Link className={isActive('/tickers') && 'active'}>
          Currencies tickers
        </Nav.Link>
      </Link>
    </Nav>
  </Navbar>
);

export default TopNavigation;
