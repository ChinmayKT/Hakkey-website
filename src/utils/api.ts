const PROD_API = 'https://api.hakkey.com/api/v1';
const DEV_API  = 'http://localhost:5000/api/v1';

const API_BASE = process.env.NODE_ENV === 'development' ? DEV_API : PROD_API;

export const postEarlyAccess = async (data: {
  name: string;
  phone: string;
  type: string;
}) => {
  const res = await fetch(`${API_BASE}/early-access`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Something went wrong");
  }

  return json;
};
