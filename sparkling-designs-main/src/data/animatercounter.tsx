import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Counter = ({ start = 1, end = 10, duration = 2 }) => {
    const [count, setCount] = useState(start);
    const countRef = useRef({ value: start });

    useEffect(() => {
        gsap.to(countRef.current, {
            value: end,
            duration: duration, // speed boost control
            ease: "power1.out",
            onUpdate: () => {
                setCount(Math.floor(countRef.current.value));
            },
        });
    }, [end, duration]);

    return (
        <h1 >
            {count}
        </h1>
    );
};

export default Counter;