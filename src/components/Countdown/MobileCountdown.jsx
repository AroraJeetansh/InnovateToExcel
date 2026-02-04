import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MobileCountdown = ({ targetDate = new Date('2026-02-20T14:00:00') }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);
    
    // Clean up interval
    return () => clearInterval(interval);
  }, [targetDate]);

  // Format number to always have 2 digits
  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <StyledWrapper>
      <div className="black-friday-component">
        <div className="timer">
          <div className="item">
            <div className="days">
              <div className="day-display">
                {formatNumber(timeLeft.days)}
              </div>
            </div>
            <p>Days</p>
          </div>
          <span className="colon">:</span>
          <div className="item">
            <div className="hours">
              <div className="hour-display">
                {formatNumber(timeLeft.hours)}
              </div>
            </div>
            <p>Hours</p>
          </div>
          <span className="colon">:</span>
          <div className="item">
            <div className="minutes">
              <div className="min-display">
                {formatNumber(timeLeft.minutes)}
              </div>
            </div>
            <p>Mins</p>
          </div>
          <span className="colon">:</span>
          <div className="item">
            <div className="seconds">
              <div className="sec-display">
                {formatNumber(timeLeft.seconds)}
              </div>
            </div>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .black-friday-component {
    --count: 0;
    --days: 31;
    --hours: 24;
    --minutes: 60;
    --seconds: 60;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: -moz-fit-content;
    width: fit-content;
    margin: auto;
    padding: 0 40px;
  }
  .black-friday-component .coupon {
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #654bff;
    scale: 0.7;
    transform-origin: bottom center;
  }
  .black-friday-component .coupon:hover .content h3 > span {
    animation: jump 0.15s ease-out 1 normal both;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(1) {
    animation-delay: 0.03s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(2) {
    animation-delay: 0.06s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(3) {
    animation-delay: 0.09s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(4) {
    animation-delay: 0.12s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(5) {
    animation-delay: 0.15s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(6) {
    animation-delay: 0.18s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(7) {
    animation-delay: 0.21s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(8) {
    animation-delay: 0.24s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(9) {
    animation-delay: 0.27s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(10) {
    animation-delay: 0.3s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(11) {
    animation-delay: 0.33s;
  }
  .black-friday-component .coupon:hover .content h3 > span:nth-of-type(12) {
    animation-delay: 0.36s;
  }
  .black-friday-component .coupon .box {
    height: 100%;
    width: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 1rem;
  }
  .black-friday-component .coupon .box span {
    display: block;
    font-weight: bold;
    font-size: 1.8rem;
  }
  .black-friday-component .coupon .diver {
    display: block;
    width: 0px;
    height: 160px;
    border: 3px dashed transparent;
    border-right-color: #654bff;
  }
  .black-friday-component .coupon .content {
    padding: 1rem;
    flex: 1;
    color: #fff;
    width: 330px;
    height: 100%;
  }
  .black-friday-component .coupon .content h3 {
    font-weight: 600;
    font-size: 2rem;
    height: 34px;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }
  .black-friday-component .coupon .content h3 span.end {
    width: 30px;
  }
  .black-friday-component .coupon .content p {
    font-weight: 400;
    font-style: normal;
    color: #959595;
    font-size: 1rem;
    line-height: 1.25rem;
  }
  .black-friday-component .coupon .content p a {
    font-style: italic;
    color: #654bff;
    text-transform: capitalize;
    word-spacing: 0.03rem;
    font-weight: bolder;
    text-decoration: underline;
    text-underline-offset: 0.05rem;
    text-decoration-color: #654bff;
  }
  .black-friday-component .timer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0rem;
    overflow: hidden;
    width: calc(244px + 0rem);
    text-align: center;
  }
  .black-friday-component .timer .colon {
    width: 8px;
    color: #fff;
    font-size: 2rem;
  }
  .black-friday-component .timer .item {
    text-align: center;
    width: 55px;
    height: fit-content;
  }
  .black-friday-component .timer .item .days,
  .black-friday-component .timer .item .hours,
  .black-friday-component .timer .item .minutes,
  .black-friday-component .timer .item .seconds {
    text-align: center;
    width: 55px;
    overflow: hidden;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .black-friday-component .timer .item .day-display,
  .black-friday-component .timer .item .hour-display,
  .black-friday-component .timer .item .min-display,
  .black-friday-component .timer .item .sec-display {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
  }
  .black-friday-component .timer .item p {
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
      scale: 1;
    }
    50% {
      transform: translateY(-10px);
      scale: 1.1;
    }
    100% {
      transform: translateY(0);
      scale: 1;
    }
  }
`;

export default MobileCountdown;