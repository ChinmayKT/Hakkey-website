export const API_BASE_URL = "http://localhost:4000";

export const postEarlyAccess = async (data: {
  name: string;
  phone: string;
  type: string;
}) => {
  const res = await fetch(`${API_BASE_URL}/api/v1/early-access`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Something went wrong");
  }

  return json;
};
