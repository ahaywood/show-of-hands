// import { initClient } from "@redwoodjs/sdk/client";
import { initRealtimeClient } from "@redwoodjs/sdk/realtime/client";

// initClient();
initRealtimeClient({
  key: window.location.pathname, // Used to group related clients
});
