import { describe, expect, it } from "vitest";
import worker from "../src/worker";

// For now, you'll need to do something like this to get a correctly-typed
// `Request` to pass to `worker.fetch()`.
const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe("Hello World worker", () => {
  it("responds with Hello World!", async () => {
    const request = new IncomingRequest("http://localhost:5173/features");
    // Create an empty context to pass to `worker.fetch()`
    const ctx = createExecutionContext();
    const response = await worker.fetch(request, env, ctx);
    // Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
    await waitOnExecutionContext(ctx);
    expect(await response.status).toBe(200);
    expect(await response.text()).toBe("FormPage!");
  });
});