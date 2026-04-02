import headerToken from "@/libs/headerToken";

export async function getUser() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/users/me`, {
    headers: headerToken,
  });
  const userData = await res.json();
  return userData.payload;
}
