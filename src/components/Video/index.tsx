'use client';

import React, { useState, useContext } from 'react';
import MuxPlayer from '@mux/mux-player-react/lazy';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { TextContext } from 'src/app/context/textContext';
import MuxPlayerStyles from './video.module.css';

interface videoType {
  playbackId: string;
  assetId: string;
}

export default function Video({ video }: { video: videoType }) {
  const [videoLoading, setVideoLoading] = useState<boolean>(true);
  const [pulsing, setPulsing] = useState<boolean>(true);
  const { textColor } = useContext(TextContext);
  // const aspectRatioString = video.data.aspect_ratio;
  // const aspectRatioArray = aspectRatioString.split(':');
  // const aspectRatio = `${aspectRatioArray[0]} / ${aspectRatioArray[1]} `;

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
      <div className="relative bg-eerieBlack md:min-w-24 h-36 xs:h-44 md:h-64 lg:h-96 flex items-center">
        <MuxPlayer
          playbackId={video?.playbackId}
          loop
          muted
          autoPlay
          streamType="live"
          className={clsx(
            MuxPlayerStyles.muxPlayer,
            'w-full h-36 xs:h-44 md:h-64 lg:h-96',
          )}
          onLoadedData={() => videoLoaded()}
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
