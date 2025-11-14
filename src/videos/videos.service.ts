import { Injectable } from '@nestjs/common';
import { Video } from './interfaces/video.interface';

@Injectable()
export class VideosService {
  private readonly videos: Video[] = [
    { id: 1, link: "https://www.youtube.com/watch?v=eGz9DS-aIeY", title: "The Future of AI", thumbnail: "https://i.ytimg.com/vi/eGz9DS-aIeY/hqdefault.jpg", summary: "A deep dive into the latest advancements in AI and machine learning, exploring the potential impacts on society.", type: "Documentary", isValid: true },
    { id: 2, link: "https://www.youtube.com/watch?v=J_mQFJ7aBxU", title: "React Hooks Tutorial", thumbnail: "https://i.ytimg.com/vi/J_mQFJ7aBxU/hqdefault.jpg", summary: "A comprehensive tutorial for beginners on how to use React Hooks to manage state and side effects in functional components.", type: "Tutorial", isValid: true },
    { id: 3, link: "https://www.youtube.com/watch?v=s2jD2E3YN30", title: "Economics of Climate Change", thumbnail: "https://i.ytimg.com/vi/s2jD2E3YN30/hqdefault.jpg", summary: "A lecture from a leading economist on the financial implications of climate change and the transition to a green economy.", type: "Lecture", isValid: true },
    { id: 4, link: "https://www.youtube.com/watch?v=tAYq5tAJxB0", title: "Scalable System Design", thumbnail: "https://i.ytimg.com/vi/tAYq5tAJxB0/hqdefault.jpg", summary: "A talk from a software architect at a major tech conference, discussing patterns and best practices for designing scalable and resilient systems.", type: "Conference Talk", isValid: true },
  ];

  findAll(): Video[] {
    return this.videos;
  }

  create(video: Omit<Video, 'id'>): Video {
    const newVideo = { ...video, id: Date.now() };
    this.videos.push(newVideo);
    return newVideo;
  }

  update(id: number, updatedVideo: Partial<Video>): Video | undefined {
    const videoIndex = this.videos.findIndex((video) => video.id === id);
    if (videoIndex > -1) {
      this.videos[videoIndex] = { ...this.videos[videoIndex], ...updatedVideo };
      return this.videos[videoIndex];
    }
    return undefined;
  }

  remove(id: number): void {
    const videoIndex = this.videos.findIndex((video) => video.id === id);
    if (videoIndex > -1) {
      this.videos.splice(videoIndex, 1);
    }
  }
}
