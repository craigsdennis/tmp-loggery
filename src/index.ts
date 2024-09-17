import { Hono } from "hono";

const app = new Hono<{Bindings: Env}>();

app.get("/api", (c) => {
	console.log("Hi Mom!");
	return c.text("Hello, Hono!");
})
export default app;
