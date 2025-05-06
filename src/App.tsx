// Vite + React + TypeScript + Tailwind CSS
// データベースなしで動作するファンリピート技術課題用アプリ

import { useState } from 'react';
import '../index.css';

const dummyCustomers = [
  { id: 1, name: '田中 太郎', email: 'tanaka@example.com', phone: '090-1234-5678', date: '2024-01-10' },
  { id: 2, name: '佐藤 花子', email: 'sato@example.com', phone: '080-9876-5432', date: '2024-03-15' },
  { id: 3, name: '鈴木 次郎', email: 'suzuki@example.com', phone: '070-2468-1357', date: '2024-02-20' },
];

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId || !password) {
      setError('ユーザーIDとパスワードを入力してください');
      return;
    }
    onLogin();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 space-y-4">
        <h2 className="text-xl font-bold">ログイン</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="ユーザーID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">ログイン</button>
      </form>
    </div>
  );
}

function CustomerList() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'date'>('name');

  const filtered = dummyCustomers
    .filter((c) => c.name.includes(search))
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">顧客一覧</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          placeholder="顧客名で検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'date')}
        >
          <option value="name">名前順</option>
          <option value="date">登録日順</option>
        </select>
      </div>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">名前</th>
            <th className="p-2 border">メール</th>
            <th className="p-2 border">電話番号</th>
            <th className="p-2 border">登録日</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c) => (
            <tr key={c.id} className="text-center">
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.email}</td>
              <td className="border p-2">{c.phone}</td>
              <td className="border p-2">{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? <CustomerList /> : <LoginForm onLogin={() => setIsLoggedIn(true)} />;
}

export default App;
