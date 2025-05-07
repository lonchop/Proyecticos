export default async function handler(req, res) {
  const backendUrl = 'http://localhost:4000/users';

  if (req.method === 'GET') {
    const response = await fetch(backendUrl);
    const data = await response.json();
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 