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

// JavaScript (Axios) Templates
export const javascriptTemplates = {
  qr: (apiKey: string) => `import axios from 'axios';

const response = await axios.post('${API_URL}/v2/codi/qr', {
  monto: 99.99,
  referenciaNumerica: '1234567',
  concepto: 'Pago de ejemplo',
  vigencia: '0'
}, {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
  }
});

console.log(response.data);`,

  push: (apiKey: string) => `import axios from 'axios';

const response = await axios.post('${API_URL}/v2/codi/push', {
  monto: 99.99,
  referenciaNumerica: '1234567',
  concepto: 'Pago de ejemplo',
  vigencia: '0',
  celularCliente: '5512345678'
}, {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
  }
});

console.log(response.data);`,

  consulta: (apiKey: string) => `import axios from 'axios';

const response = await axios.post('${API_URL}/v2/codi/consulta', {
  folioCodi: '321e210838321e210838',
  tpg: 10,
  npg: 1,
  fechaInicial: '0',
  fechaFinal: '0'
}, {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '${apiKey}'
  }
});

console.log(response.data);`,
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
