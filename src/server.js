const express = require('express');
const tables = require('./tables');

const app = express();
const PORT = process.env.PORT || 3000;

const notFound = (res) => res.status(404).json({ error: 'Not found' });
const hasTable = (id) => Object.prototype.hasOwnProperty.call(tables, id);

// GET /health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// GET /api/meta/tables — list available tables
app.get('/api/meta/tables', (req, res) =>
  res.json(Object.entries(tables).map(([id, t]) => ({ id, name: id, description: t.description })))
);

// GET /api/meta/tables/:id/columns — describe one table
app.get('/api/meta/tables/:id/columns', (req, res) => {
  if (!hasTable(req.params.id)) return notFound(res);
  res.json({ columns: tables[req.params.id].columns });
});

// GET /api/:id — all rows of a table
app.get('/api/:id', (req, res) => {
  if (!hasTable(req.params.id)) return notFound(res);
  res.json(tables[req.params.id].rows);
});

app.use((req, res) => notFound(res));

app.listen(PORT, () => console.log(`data-source-poc listening on http://localhost:${PORT}`));
