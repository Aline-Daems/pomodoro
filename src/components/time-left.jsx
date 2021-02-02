import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";

momentDurationFormatSetup(moment);
const TimeLeft = ({
    handleStartStopClick,
    handleResetButtonClick,
    startStopButtonLabel,
    timeLeft,
    timerLabel,
}) => {
    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});
    return (
        <div
            className={
                "flex flex-col justify-evenly items-center w-64 h-64 bg-green-500 rounded-full"
            }>
            <p className={"text-green-300 text-2xl"} id={"timer-label"}>
                {timerLabel}
            </p>
            <p className={"font-clock text-4xl font-bold"} id={"time-left"}>
                {formattedTimeLeft}
            </p>
            <button
                className={
                    "text-white font-semibold bg-green-400 px-4 py-2 rounded-lg"
                }
                onClick={handleStartStopClick}>
                {startStopButtonLabel}
            </button>
            <button
                className={
                    "border-2 text-white rounded-lg border-green-900 border-solid px-4 py-2"
                }
                id={"reset"}
                onClick={handleResetButtonClick}>
                {"Reset"}
            </button>
        </div>
    );
};
export default TimeLeft;
