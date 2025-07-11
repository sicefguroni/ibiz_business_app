import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Typography, Box, CircularProgress, LinearProgress, Paper } from '@mui/material';

import videoOne from '../../assets/one.mp4';
import videoTwo from '../../assets/two.mp4';
import videoThree from '../../assets/three.mp4';

/**
 * LoadingAnimation Component
 *
 * This component displays a loading animation with a sequence of videos
 * while a process (e.g., business idea analysis) is ongoing.
 * It cycles through a list of video sources, randomizing the order and
 * repeating each video a few times before transitioning. It also includes
 * a Material-UI linear progress bar at the bottom.
 *
 * @param {object} props - The component props.
 * @param {string[]} props.videoSources - An array of video file paths to play in sequence.
 * Defaults to local video assets.
 * @param {string} props.submissionStatus - The current status of the submission ('idle', 'loading', 'success', 'error').
 * This can be used for conditional rendering of messages or animations.
 */
const LoadingAnimation = ({
    videoSources = [videoOne, videoTwo, videoThree],
    submissionStatus
}) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [repeatCount, setRepeatCount] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const videoRef = useRef(null);
    const maxRepeats = 1;
    const transitionDelay = 1000;
    const totalAnimationDuration = 6000;
    const [progress, setProgress] = useState(0);


    const [shuffledVideos, setShuffledVideos] = useState(() => {

        const shuffled = [...videoSources].sort(() => Math.random() - 0.5);
        return shuffled;
    });


    const handleVideoEnded = useCallback(() => {
        if (repeatCount < maxRepeats) {

            setRepeatCount(prev => prev + 1);
            videoRef.current.play().catch(error => console.error("Video repeat playback failed:", error));
        } else {

            setIsTransitioning(true);
            setRepeatCount(0);

            setTimeout(() => {
                setCurrentVideoIndex((prevIndex) => {

                    const nextIndex = (prevIndex + 1) % shuffledVideos.length;
                    return nextIndex;
                });
                setIsTransitioning(false);
            }, transitionDelay);
        }
    }, [repeatCount, maxRepeats, shuffledVideos, transitionDelay]);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.addEventListener('ended', handleVideoEnded);


            if (!isTransitioning) {
                videoElement.load();
                videoElement.play().catch(error => console.error("Video playback failed:", error));
            } else {

                videoElement.pause();
            }
        }


        return () => {
            if (videoElement) {
                videoElement.removeEventListener('ended', handleVideoEnded);
            }
        };
    }, [currentVideoIndex, isTransitioning, handleVideoEnded]);


    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = (100 / (totalAnimationDuration / 100));
                return Math.min(oldProgress + diff, 100);
            });
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, [totalAnimationDuration]);


    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                bgcolor: '#F8EFEA',
                p: 2,
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    p: { xs: 4, sm: 6 },
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                    maxWidth: '600px',
                    width: '100%',
                    border: '2px solid #FF69B4',

                    height: { xs: 'auto', sm: '480px' },
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h5" component="h2" align="center" sx={{ fontWeight: 'bold', color: '#333' }}>
                    Analyzing Feasibility...
                </Typography>

                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '490px',
                        aspectRatio: '16 / 9',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',

                        minHeight: '370px',
                    }}
                >
                    {isTransitioning ? (
                        <CircularProgress size={60} sx={{ color: '#f97316' }} />
                    ) : (
                        <video
                            ref={videoRef}
                            src={shuffledVideos[currentVideoIndex]}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            autoPlay
                            muted
                            playsInline
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}
                </Box>


                <Box sx={{ width: '100%', mt: 2 }}>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#f97316',
                                borderRadius: 4,
                            },
                        }}
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default LoadingAnimation;