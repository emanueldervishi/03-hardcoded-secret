const STRIPE_SECRET_KEY = "sk_test_51PRE_FLIGHT_FAKE_SECRET_DO_NOT_USE";
const GITHUB_TOKEN = "ghp_PREflightFakeTokenForScannerOnly1234567890";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\\nFAKEKEYFORSCANNERONLY\\n-----END PRIVATE KEY-----";

export default function Page() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 48 }}>
      <h1>Hardcoded Secret</h1>
      <p>This app intentionally includes fake secret-like strings in source code.</p>
      <pre>{JSON.stringify({ STRIPE_SECRET_KEY, GITHUB_TOKEN, PRIVATE_KEY }, null, 2)}</pre>
    </main>
  );
}
