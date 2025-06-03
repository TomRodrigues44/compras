import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>Bem-vindo ao Painel de Compras</h2>
        <p>Escolha uma das opções no menu para começar.</p>
      </div>
    </div>
  );
}
