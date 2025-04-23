import {BarraProgressoStyle} from "./Style";
import {useEffect, useState} from "react";

const BarraProgresso = ({
                            progress = 20,
                            color = "red",
                            showPercentage = true
                        }) => {
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentProgress < progress) {
                setCurrentProgress(prev => Math.min(prev + 1, progress));
            }
        }, 15);
        return () => clearTimeout(timer);
    }, [currentProgress, progress]);

    return (
        <BarraProgressoStyle
            progress={currentProgress}
        >
            {showPercentage && (
                <div
                    className={'barText'}
                >
                    {currentProgress}%
                </div>
            )}

            <div className={'barTrack'}>
                <div
                    className={'barFill'}
                    color={color}
                />
            </div>


        </BarraProgressoStyle>
    )
}

export default BarraProgresso;