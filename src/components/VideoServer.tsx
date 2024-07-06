import React from 'react';
import MuxPlayer from '@mux/mux-player-react';
import { createBlurUp } from '@mux/blurup';

interface videoType {
  playbackId: string;
  assetId: string;
}

export default async function Video({ video }: { video: videoType }) {
  const { blurDataURL, aspectRatio } = await createBlurUp(
    video?.playbackId,
    {},
  );

  return (
    <MuxPlayer
      playbackId={video?.playbackId}
      loop
      muted
      autoPlay
      streamType="live"
      className="w-full h-44 md:h-64 lg:h-96"
      placeholder={blurDataURL}
      style={{ aspectRatio, '--controls': 'none' }}
    />
  );
}
