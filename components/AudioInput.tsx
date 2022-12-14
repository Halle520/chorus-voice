import React, { forwardRef, InputHTMLAttributes } from "react";
import { Input, InputProps } from "@mantine/core";

type AudioInputProps = {
    label?: string;
} & InputHTMLAttributes<HTMLInputElement> &
    InputProps;

const AudioInput = forwardRef(
    (props: AudioInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
        const { label, ...rest } = props;
        return (
            <>
                <Input.Wrapper label={label} required>
                    <Input
                        ref={ref}
                        type={"file"}
                        accept={"audio/*"}
                        placeholder="Your phone"
                        {...rest}
                    />
                </Input.Wrapper>
            </>
        );
    }
);

AudioInput.displayName = "AudioInput";

export default AudioInput;
