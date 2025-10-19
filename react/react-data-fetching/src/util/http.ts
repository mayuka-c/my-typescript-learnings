export async function getPosts(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("returned non 2xx status code");
  }

  const data = response.json() as unknown;
  return data;
}
