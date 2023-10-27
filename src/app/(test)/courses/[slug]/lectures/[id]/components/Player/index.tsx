'use client'

import { usePlayerController } from './usePlayerController'

export const Player = ({
  courseId,
  lectureId,
  videoSrc,
  currentTime,
}: {
  courseId: string
  lectureId: string
  videoSrc: string
  currentTime?: number
}) => {
  usePlayerController({ courseId, lectureId, videoSrc, currentTime })

  return (
    <div className="w-full">
      <div id={videoSrc} />
    </div>
  )
}
