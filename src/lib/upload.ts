export type UploadResult = { cid: string; url: string };

const BACKEND_URL =
  process.env.EXPO_PUBLIC_BACKEND_URL ??
  process.env.BACKEND_URL;

export async function uploadImage(uri: string, authToken?: string): Promise<UploadResult> {
  if (!BACKEND_URL) throw new Error("Missing EXPO_PUBLIC_BACKEND_URL");
  const form = new FormData();
  form.append("file", { uri, name: "profile.jpg", type: "image/jpeg" } as any);
  const res = await fetch(`${BACKEND_URL}/upload`, {
    method: "POST",
    headers: { ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}) },
    body: form,
  });
  if (!res.ok) throw new Error(`Upload failed: ${res.status}`);
  return (await res.json()) as UploadResult;
}