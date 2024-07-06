'use client';

import React, { useState, useContext } from 'react';
import MuxPlayer from '@mux/mux-player-react/lazy';
import { motion } from 'framer-motion';
import clsx from 'clsx';
// import { createBlurUp } from '@mux/blurup';

import { TextContext } from 'src/app/context/textContext';

interface videoType {
  playbackId: string;
  assetId: string;
}

export default function Video({ video }: { video: videoType }) {
  // const { blurDataURL, aspectRatio } = await createBlurUp(
  //   video?.playbackId,
  //   {},
  // );

  const [videoLoading, setVideoLoading] = useState<boolean>(true);
  const [pulsing, setPulsing] = useState<boolean>(true);
  const { textColor } = useContext(TextContext);

  const videoLoaded = () => {
    setVideoLoading(false);
    setTimeout(() => {
      setPulsing(false);
    }, 200);
  };

  return (
    <div
      className={clsx(
        'p-2 lg:p-4 rounded',
        textColor === 'Black' ? 'bg-eerieBlack' : 'bg-white',
      )}
    >
      <div className="relative bg-eerieBlack md:min-w-24 flex items-center">
        <MuxPlayer
          playbackId={video?.playbackId}
          loop
          muted
          autoPlay
          streamType="live"
          style={{
            '--controls': 'none',
          }}
          className="w-full h-44 md:h-64 lg:h-96"
          onLoadedData={() => videoLoaded()}
          // placeholder={blurDataURL}
          // style={{ aspectRatio }}
        />
        <motion.div
          className="bg-gray absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: videoLoading ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <motion.div
            className={clsx(
              pulsing ? 'animate-pulse' : '',
              'bg-white absolute inset-0',
            )}
            initial={{ opacity: 1 }}
            animate={{ opacity: videoLoading ? 1 : 0 }}
            transition={{ delay: 1, duration: 0.4 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
