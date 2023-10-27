import VimeoPlayer from '@vimeo/player'
import axios from 'axios'
import { useEffect } from 'react'
import { SAVE_PROGRESS_INTERVAL } from './constants'

export class LecturesService {
  static async saveProgress(lectureId: string, courseId: string, time: number) {
    return await axios.patch(`/api/saveLectureProgress`, {
      lectureId,
      courseId,
      time,
    })
  }
}

export const usePlayerController = ({
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
  useEffect(() => {
    const player = new VimeoPlayer(videoSrc, {
      id: +videoSrc,
      responsive: true,
      title: false,
    })
    if (currentTime) {
      player.setCurrentTime(currentTime)
    }
    let interval: NodeJS.Timeout | null = null
    const saveProgress = async () => {
      const currentTime = await player.getCurrentTime()
      LecturesService.saveProgress(lectureId, courseId, currentTime)
    }
    player.on('play', () => {
      interval = setInterval(saveProgress, SAVE_PROGRESS_INTERVAL)
    })
    player.on('seeked', () => {
      saveProgress()
    })
    player.on('pause', () => {
      if (interval) clearInterval(interval)
      saveProgress()
    })
    player.on('ended', () => {
      // skip to next video
    })
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [courseId, currentTime, lectureId, videoSrc])
}
