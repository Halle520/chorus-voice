import React from "react";
import { ReactComponent as Play } from "~/public/icons/play.svg";
import { ReactComponent as Pause } from "~/public/icons/pause.svg";
import { ReactComponent as Next } from "~/public/icons/next.svg";
import { ReactComponent as Prev } from "~/public/icons/prev.svg";

type AudioControlsProps = {
    isPlaying: boolean;
    onPlayPauseClick: (event: boolean) => void;
    onPrevClick: React.MouseEventHandler<HTMLButtonElement>;
    onNextClick: React.MouseEventHandler<HTMLButtonElement>;
};
const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick,
}: AudioControlsProps) => (
    <div className="audio-controls">
        <button
            type="button"
            className="prev"
            aria-label="Previous"
            onClick={onPrevClick}
        >
            <Prev />
        </button>
        {isPlaying ? (
            <button
                type="button"
                className="pause"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                <Pause />
            </button>
        ) : (
            <button
                type="button"
                className="play"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <Play />
            </button>
        )}
        <button
            type="button"
            className="next"
            aria-label="Next"
            onClick={onNextClick}
        >
            <Next />
        </button>
    </div>
);

export default AudioControls;
