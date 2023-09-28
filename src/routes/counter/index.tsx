import { component$, useSignal } from "@builder.io/qwik";
import { Island_1, Island_2 } from "~/integrations/react/Mui";

export default component$(() => {
  console.log("Qwik Render: never in the browser");
  const count = useSignal(0);
  return (
    <main style={{ textAlign: "center", margin: '20px 0' }}>
      <Island_1
        onClick$={() => {
          console.log("Island_1: click", count.value);
          count.value++;
        }}
      />
      <Island_2 count={count.value}></Island_2>
    </main>
  );
});
