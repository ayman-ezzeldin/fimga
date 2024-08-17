import React, { useCallback } from "react"
import LiveCursors from "./cursor/LiveCursors"
import {useOthers, useMyPresence } from "@/liveblocks.config"

const Live = () => {
  const others = useOthers()
  const [{cursor},updateMyPresence] = useMyPresence() as any

  const handelPoinerMove = useCallback((event : React.PointerEvent) => {
    event.preventDefault()
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x
    const y = event.clientX - event.currentTarget.getBoundingClientRect().y
    updateMyPresence({cursor: {x,y}})
  },[])

  const handelPoinerLeave = useCallback((event : React.PointerEvent) => {
    event.preventDefault()
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x
    const y = event.clientX - event.currentTarget.getBoundingClientRect().y
    updateMyPresence({cursor: null , message : null})
  },[])

  const handelPoinerDown = useCallback((event : React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x
    const y = event.clientX - event.currentTarget.getBoundingClientRect().y
    updateMyPresence({cursor: {x,y}})
  },[])

  return (
    <div
      onPointerMove={handelPoinerMove}
      onPointerLeave={handelPoinerLeave}
      onPointerDown={handelPoinerDown}
    className=" flex justify-center items-center" >
    <div>Live</div>
    <LiveCursors others={others} />
    </div>
  )
}

export default Live