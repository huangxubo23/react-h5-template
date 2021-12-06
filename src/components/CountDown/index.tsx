import React, { useState, useEffect } from 'react';

interface CountDownProps {
  countDown: number;
  autoStart: boolean;
  onStart?: () => void;
  onFinish?: () => void;
  deforeCheck?: () => Promise<boolean>;
  className?: string
}


const CountDown: React.FC<CountDownProps> = ({
  children,
  countDown,
  autoStart,
  onStart,
  onFinish,
  deforeCheck,
  className,
}) => {
  const [timing, setTiming] = useState(autoStart || false);
  const [second, setSecond] = useState(countDown);

  useEffect(() => {
    let timer: any;
    if (timing) {
      timer = setInterval(() => {
        setSecond(preSecond => {
          if (preSecond <= 1) {
            clearInterval(timer);
            setTiming(false);
            onFinish instanceof Function && onFinish();
            return countDown;
          } else {
            return preSecond - 1;
          }
        })
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    };
  }, [timing])

  const handleStartTiming = async () => {
    if (deforeCheck instanceof Function) {
      try {
        await deforeCheck();
        onStart instanceof Function && onStart();
        setTiming(true);
      } catch (err) {
        console.error('CountDown deforeCheck error', err);
      }
    } else {
      onStart instanceof Function && onStart();
      setTiming(true);
    }
  }

  return (
    <span className={className} {...!autoStart && { onClick: handleStartTiming }}>
      {timing ? `${second}秒` : children}
    </span>
  )
}

export default CountDown;
