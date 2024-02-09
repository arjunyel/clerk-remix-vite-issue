import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";

export const loader = (args: LoaderFunctionArgs) => {
	console.log(args.context);
	return rootAuthLoader(args);
};

export const ErrorBoundary = ClerkErrorBoundary();

function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default ClerkApp(App);
