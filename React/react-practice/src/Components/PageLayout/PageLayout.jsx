function PageLayout({ title, children }) {
  return (
    <div className="page-layout">
      <header className="page-header">
        <h1>{title}</h1>
      </header>

      <main className="page-main">
        {children}
      </main>

      <footer className="page-footer">
        <p>&copy; 2026</p>
      </footer>
    </div>
  );
}

export default PageLayout;