import classNames from "classnames";
import { useRef, forwardRef } from "react";
import { usePopper } from "react-popper";

const ToolTip = forwardRef((props, ref) => {
  const { attributes } = usePopper(
    props.boxRef.current,
    ref.current,
    {}
  );
  return (
    <div
      id="tooltip"
      role="tooltip"
      className={classNames("tooltip", {
        "tooltip-active": props.toolTipState,
      })}
      ref={ref}
      {...attributes.popper}
    >
      My tooltip
    </div>
  );
});

export default ToolTip;
