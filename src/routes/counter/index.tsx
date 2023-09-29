import { component$, useSignal } from "@builder.io/qwik";
import { Island_1, Island_2 } from "~/integrations/react/Mui";
import { MySlider } from "~/integrations/react/Mui";

export default component$(() => {
  console.log("Qwik Render: never in the browser");
  const count = useSignal(0);
  return (
    <main style={{ textAlign: "center", margin: "20px 0" }}>
      <div style="border: 1px solid green">
        <Island_1
          onClick$={() => {
            console.log("Island_1: click", count.value);
            count.value++;
          }}
        />
      </div>
      <div style="border: 1px solid red">
        <Island_2 count={count.value}></Island_2>
      </div>
      <div style={{ height: "1200px" }} />
      <div style={{ padding: "0 200px 100px 200px" }} >
      <MySlider client:visible />
      </div>
    </main>
  );
});
