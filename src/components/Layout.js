import { Container, TableContainer } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Header title ="Company Name">
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Blog</Link>
        <Link href="/">About</Link>
        <Link href="/contact">Contact</Link>
      </Header>
      <Container fixed>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}