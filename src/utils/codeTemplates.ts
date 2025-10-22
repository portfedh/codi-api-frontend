/**
 * Code templates for API examples
 */

const API_URL = 'http://localhost:3000';

// cURL Templates
export const curlTemplates = {
  qr: (apiKey: string) => `curl -X POST ${API_URL}/v2/codi/qr \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: ${apiKey}" \\
  -d '{
    "monto": 99.99,
    "referenciaNumerica": "1234567",
    "concepto": "Pago de ejemplo",
    "vigencia": "0"
  }'`,

  push: (apiKey: string) => `curl -X POST ${API_URL}/v2/codi/push \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: ${apiKey}" \\
  -d '{
    "monto": 99.99,
    "referenciaNumerica": "1234567",
    "concepto": "Pago de ejemplo",
    "vigencia": "0",
    "celularCliente": "5512345678"
  }'`,

  consulta: (apiKey: string) => `curl -X POST ${API_URL}/v2/codi/consulta \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: ${apiKey}" \\
  -d '{
    "folioCodi": "321e210838321e210838",
    "tpg": 10,
    "npg": 1,
    "fechaInicial": "0",
    "fechaFinal": "0"
  }'`,
};

// JavaScript (Fetch) Templates
export const javascriptTemplates = {
  qr: (apiKey: string) => `const response = await fetch('${API_URL}/v2/codi/qr', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
  },
  body: JSON.stringify({
    monto: 99.99,
    referenciaNumerica: '1234567',
    concepto: 'Pago de ejemplo',
    vigencia: '0'
  })
});

if (!response.ok) {
  throw new Error(\`HTTP error! status: \${response.status}\`);
}

const data = await response.json();
console.log(data);`,

  push: (apiKey: string) => `const response = await fetch('${API_URL}/v2/codi/push', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
  },
  body: JSON.stringify({
    monto: 99.99,
    referenciaNumerica: '1234567',
    concepto: 'Pago de ejemplo',
    vigencia: '0',
    celularCliente: '5512345678'
  })
});

if (!response.ok) {
  throw new Error(\`HTTP error! status: \${response.status}\`);
}

const data = await response.json();
console.log(data);`,

  consulta: (apiKey: string) => `const response = await fetch('${API_URL}/v2/codi/consulta', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
  },
  body: JSON.stringify({
    folioCodi: '321e210838321e210838',
    tpg: 10,
    npg: 1,
    fechaInicial: '0',
    fechaFinal: '0'
  })
});

if (!response.ok) {
  throw new Error(\`HTTP error! status: \${response.status}\`);
}

const data = await response.json();
console.log(data);`,
};

// Python (requests) Templates
export const pythonTemplates = {
  qr: (apiKey: string) => `import requests

url = '${API_URL}/v2/codi/qr'
headers = {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
}
data = {
    'monto': 99.99,
    'referenciaNumerica': '1234567',
    'concepto': 'Pago de ejemplo',
    'vigencia': '0'
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`,

  push: (apiKey: string) => `import requests

url = '${API_URL}/v2/codi/push'
headers = {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
}
data = {
    'monto': 99.99,
    'referenciaNumerica': '1234567',
    'concepto': 'Pago de ejemplo',
    'vigencia': '0',
    'celularCliente': '5512345678'
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`,

  consulta: (apiKey: string) => `import requests

url = '${API_URL}/v2/codi/consulta'
headers = {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
}
data = {
    'folioCodi': '321e210838321e210838',
    'tpg': 10,
    'npg': 1,
    'fechaInicial': '0',
    'fechaFinal': '0'
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`,
};
