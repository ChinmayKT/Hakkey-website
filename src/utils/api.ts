export const API_BASE_URL = "http://13.60.157.59:5000";

export const postEarlyAccess = async (data: {
  name: string;
  phone: string;
  type: string;
}) => {
  const res = await fetch(`${API_BASE_URL}/api/v1/early-access`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Something went wrong");
  }

  return json;
};
