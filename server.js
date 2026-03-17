import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const SUPABASE_URL = 'https://wmbeasietnwr9rh7eng-giq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_WmBE_asietNWr9rH7eNGGQ_liEIX2FM';

async function supabaseFetch(tabla, id, method = 'GET', body) {
  const url = id 
    ? `${SUPABASE_URL}/rest/v1/${tabla}?id=eq.${id}`
    : `${SUPABASE_URL}/rest/v1/${tabla}`;
  
  const options = {
    method,
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': method === 'POST' || method === 'PUT' ? 'return=representation' : ''
    }
  };
  
  if (body) options.body = JSON.stringify(body);
  
  const res = await fetch(url, options);
  const data = await res.json();
  return { res, data };
}

// MASCOTAS
app.get('/api/mascotas', async (req, res) => {
  const { data } = await supabaseFetch('mascotas');
  res.json(data);
});

app.post('/api/mascotas', async (req, res) => {
  const { data } = await supabaseFetch('mascotas', null, 'POST', req.body);
  res.status(201).json(data[0]);
});

app.get('/api/mascotas/:id', async (req, res) => {
  const { data } = await supabaseFetch('mascotas', req.params.id);
  res.json(data);
});

app.put('/api/mascotas/:id', async (req, res) => {
  const { data } = await supabaseFetch('mascotas', req.params.id, 'PUT', req.body);
  res.json(data[0]);
});

app.delete('/api/mascotas/:id', async (req, res) => {
  await supabaseFetch('mascotas', req.params.id, 'DELETE');
  res.json({ message: 'Eliminado' });
});

// PROPIETARIOS
app.get('/api/propietarios', async (req, res) => {
  const { data } = await supabaseFetch('propietarios');
  res.json(data);
});

app.post('/api/propietarios', async (req, res) => {
  const { data } = await supabaseFetch('propietarios', null, 'POST', req.body);
  res.status(201).json(data[0]);
});

app.get('/api/propietarios/:id', async (req, res) => {
  const { data } = await supabaseFetch('propietarios', req.params.id);
  res.json(data);
});

app.put('/api/propietarios/:id', async (req, res) => {
  const { data } = await supabaseFetch('propietarios', req.params.id, 'PUT', req.body);
  res.json(data[0]);
});

app.delete('/api/propietarios/:id', async (req, res) => {
  await supabaseFetch('propietarios', req.params.id, 'DELETE');
  res.json({ message: 'Eliminado' });
});

// CITAS
app.get('/api/citas', async (req, res) => {
  const { data } = await supabaseFetch('citas');
  res.json(data);
});

app.post('/api/citas', async (req, res) => {
  const { data } = await supabaseFetch('citas', null, 'POST', req.body);
  res.status(201).json(data[0]);
});

app.get('/api/citas/:id', async (req, res) => {
  const { data } = await supabaseFetch('citas', req.params.id);
  res.json(data);
});

app.put('/api/citas/:id', async (req, res) => {
  const { data } = await supabaseFetch('citas', req.params.id, 'PUT', req.body);
  res.json(data[0]);
});

app.delete('/api/citas/:id', async (req, res) => {
  await supabaseFetch('citas', req.params.id, 'DELETE');
  res.json({ message: 'Eliminado' });
});

// TRATAMIENTOS
app.get('/api/tratamientos', async (req, res) => {
  const { data } = await supabaseFetch('tratamientos');
  res.json(data);
});

app.post('/api/tratamientos', async (req, res) => {
  const { data } = await supabaseFetch('tratamientos', null, 'POST', req.body);
  res.status(201).json(data[0]);
});

app.get('/api/tratamientos/:id', async (req, res) => {
  const { data } = await supabaseFetch('tratamientos', req.params.id);
  res.json(data);
});

app.put('/api/tratamientos/:id', async (req, res) => {
  const { data } = await supabaseFetch('tratamientos', req.params.id, 'PUT', req.body);
  res.json(data[0]);
});

app.delete('/api/tratamientos/:id', async (req, res) => {
  await supabaseFetch('tratamientos', req.params.id, 'DELETE');
  res.json({ message: 'Eliminado' });
});

// VACUNAS
app.get('/api/vacunas', async (req, res) => {
  const { data } = await supabaseFetch('vacunas');
  res.json(data);
});

app.post('/api/vacunas', async (req, res) => {
  const { data } = await supabaseFetch('vacunas', null, 'POST', req.body);
  res.status(201).json(data[0]);
});

app.put('/api/vacunas/:id', async (req, res) => {
  const { data } = await supabaseFetch('vacunas', req.params.id, 'PUT', req.body);
  res.json(data[0]);
});

app.delete('/api/vacunas/:id', async (req, res) => {
  await supabaseFetch('vacunas', req.params.id, 'DELETE');
  res.json({ message: 'Eliminado' });
});

export default app;
