import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 20, padding: 20, borderBottom: '1px solid #ddd', marginBottom: 20 }}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/produtos">Produtos</Link>
      <Link href="/fornecedores">Fornecedores</Link>
      <Link href="/lista">Lista de Compras</Link>
      <Link href="/login" style={{ marginLeft: 'auto' }}>Sair</Link>
    </nav>
  );
}
