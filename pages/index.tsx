import { Button } from "@mantine/core";
import React, { useRef, useState } from "react";
// import AudioPlayer from "../components/AudioPlayer";
import AudioInput from "@/components/AudioInput";

export default function Home() {
    const audioRef1 = useRef<HTMLAudioElement>();
    const audioRef2 = useRef<HTMLAudioElement>();
    const audioRef3 = useRef<HTMLAudioElement>();
    const audioRef4 = useRef<HTMLAudioElement>();
    const [src, setSrc] = useState<any>();

    const onPlay = () => {
        Object.keys(src).map((key: string) => {
            const audio = new Audio(URL.createObjectURL(src[key]));
            audio.play();
        });
    };

    const addFile = (id: number) => (e: any) => {
        const file = e.target.files[0];
        setSrc({
            ...src,
            [id]: file,
        });
    };
    return (
        <div>
            <AudioInput
                label={"Soprano"}
                onChange={addFile(1)}
                ref={audioRef1 as any}
            />
            <AudioInput
                label={"Alto"}
                onChange={addFile(2)}
                ref={audioRef2 as any}
            />
            <AudioInput
                label={"Tenor"}
                onChange={addFile(3)}
                ref={audioRef3 as any}
            />
            <AudioInput
                label={"Bass"}
                onChange={addFile(4)}
                ref={audioRef4 as any}
            />
            {/* <AudioPlayer tracks={} /> */}
            <Button
                onClick={onPlay}
                variant="gradient"
                gradient={{ from: "teal", to: "blue", deg: 60 }}
            >
                Play
            </Button>
        </div>
    );
}
