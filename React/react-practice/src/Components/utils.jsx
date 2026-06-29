export function Header() {
  return (
    <header>
      <h1>Site Header</h1>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p>© 2024</p>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}