import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Collapsible } from "~/components";
import styles from "~/components/select/select-example.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <Collapsible.Root>
        <Collapsible.Trigger>Collapsible Trigger</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </Collapsible.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
