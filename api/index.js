import server from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const fetchRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.body && ['POST', 'PUT', 'PATCH'].includes(req.method) ? req.body : undefined,
    });

    const fetchResponse = await server.fetch(fetchRequest);
    
    res.statusCode = fetchResponse.status;
    
    for (const [key, value] of fetchResponse.headers) {
      res.setHeader(key, value);
    }

    res.end(await fetchResponse.text());
  } catch (error) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}

