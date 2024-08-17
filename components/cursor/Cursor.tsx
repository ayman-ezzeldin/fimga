import CursorSVG from "@/public/assets/CursorSVG";

type Props = { x: number; y: number; color: string; message: string };
const Cursor = ({ x, y, color, message }: Props) => {
  return (
    <div
      className={` pointer-events-none absolute top-0 left-0 translate-x-[${x}] translate-y-[${y}]}  `}
    >
      <CursorSVG color={color} />
    </div>
  );
};

export default Cursor;
