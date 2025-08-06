'use client';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = 'up',
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: 'up' | 'down';
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((image) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      try {
        const loaded = await Promise.all(promises);
        setLoadedImages(loaded);
      } catch (error) {
        console.error('Failed to load images', error);
      }
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') handleNext();
      else if (event.key === 'ArrowLeft') handlePrevious();
    };

    window.addEventListener('keydown', handleKeyDown);

    let interval: NodeJS.Timeout | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, images]);

  const slideVariants: Variants = {
    initial: {
      scale: 0.95,
      opacity: 0,
      rotateX: 20,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
    upExit: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    downExit: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden',
        className
      )}
      style={{ perspective: '1000px' }}
    >
      {areImagesLoaded && (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === 'up' ? 'upExit' : 'downExit'}
            variants={slideVariants}
            className="absolute inset-0 h-full w-full object-cover object-center z-10 transition-all duration-1000 opacity-5"
          />
        </AnimatePresence>
      )}

      {areImagesLoaded && overlay && (
        <div
          className={cn(
            'absolute inset-0 z-20 pointer-events-none',
            overlayClassName
          )}
        />
      )}

      <div className="relative z-30 w-full h-full">{children}</div>
    </div>
  );
};
