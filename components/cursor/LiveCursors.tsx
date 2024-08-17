import Cursor from "./Cursor";
import { COLORS } from "@/constants";
import { LiveCursorProps } from "@/types/type";

const LiveCursors = ({ others } : LiveCursorProps) => {
  return  others.map(({connectionId , presence} )=> {
    if ( presence == null || !presence?.cursor) return null ;

    return (
      <Cursor 
        key={connectionId}
        x={presence.cursor.x}
        y={presence.cursor.y}
        color={COLORS[Number(connectionId % COLORS.length)]}
        message={presence.message}
      />
    )
  })
}

export default LiveCursors
