/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>Items</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/sell">
      <a>Signup</a>
    </Link>
    <Link href="/sell">
      <a>Orders</a>
    </Link>
    <Link href="/sell">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
