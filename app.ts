import { WebView } from "https://deno.land/x/webview/mod.ts";
import coffee from "https://deno.land/x/coffee/mod.ts";
import { isEmoji } from "https://deno.land/x/emoji/mod.ts";

const users: Array<string> = coffee.get("users").value as Array<string>;

let mentionUser = users[Math.floor(Math.random() * users.length)];

const html = `
  <html>
  <body>
    <h1>@${mentionUser}</h1>
    <h2>&#x1f44f;&#x1f44f;&#x1f44f;&#x1f44f;&#x1f44f;&#x1f44f;&#x1f44f;</h2>
  </body>
  </html>
`;

await new WebView({
  title: "Local webview_deno example",
  url: `data:text/html,${encodeURIComponent(html)}`,
  width: 300,
  height: 300,
  resizable: true,
  debug: true,
  frameless: false,
}).run();
