import {
  $,
  type PropsOf,
  Slot,
  component$,
  useContext,
  useOnWindow,
} from "@builder.io/qwik";
import { collapsibleContextId } from "./collapsible-context-id";

export const CollapsibleTrigger = component$<PropsOf<"button">>(
  ({ onClick$, ...props }) => {
    const context = useContext(collapsibleContextId);
    const contentId = `${context.itemId}-content`;

    const handleClick$ = $(() => {
      context.isOpenSig.value = !context.isOpenSig.value;
    });

    useOnWindow("resize", context.getContentDimensions$);

    return (
      <button
        {...props}
        ref={context.triggerRef}
        disabled={context.disabled}
        data-disabled={context.disabled ? "" : undefined}
        data-open={context.isOpenSig.value ? "" : undefined}
        data-closed={!context.isOpenSig.value ? "" : undefined}
        aria-expanded={context.isOpenSig.value}
        aria-controls={contentId}
        onClick$={[context.getContentDimensions$, handleClick$, onClick$]}
      >
        <Slot />
      </button>
    );
  }
);
