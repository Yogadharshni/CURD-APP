export function Base({ title, discription, children }) {
  return (
    <div className="main-compo">
      <header>
        <h1 className='heading'>{title}</h1>
      </header>

      <main className="main-segment">
        <h2>{discription}</h2>
        <div className="children-segment">
          {children}
        </div>
      </main>

    </div>
  );
}
