import React from "react";

export const BreakSessionContainer = ({children, ...props}) => (
    <div className={"flex flex-col items-center"} {...props}>
        {children}
    </div>
);
// eslint-disable-next-line react/no-multi-comp
export const BreakSessionLabel = ({children, ...props}) => (
    <p className={"text-lg text-green-200"} {...props}>
        {children}
    </p>
);

// eslint-disable-next-line react/no-multi-comp
export const BreakSessionTime = ({children, ...props}) => (
    <p className={"text-4xl font-blod text-white"} {...props}>
        {children}
    </p>
);

// eslint-disable-next-line react/no-multi-comp
export const PlusMinusButton = ({children, ...props}) => (
    <button
        {...props}
        className={"mt-2 text-lg text-gray-800 px-4 py-2 bg-green-200 rounded"}>
        {children}
    </button>
);
// eslint-disable-next-line react/no-multi-comp
export const PlusMinusButtonContainer = ({children, ...props}) => (
    <div {...props} className={"grid grid-flow-col gap-2 rounded"}>
        {children}
    </div>
);
