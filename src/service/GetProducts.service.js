import headerToken from "@/libs/headerToken";
export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/products`, {
    headers: headerToken,
  });
  const data = await res.json();
  return data.payload;
}
