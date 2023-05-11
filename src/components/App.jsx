import { useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statictics from "./Statistics";
import Notification from "./Notification";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;

   const handleFeedback = ({ currentTarget }) => {
     const { name } = currentTarget;
   
     switch (name) {
       case 'good': setGood(prevState => prevState + 1)
         break
       case 'neutral': setNeutral(prevState => prevState + 1);
         break
       case 'bad': setBad(prevState => prevState + 1);
         break
       default: return;
     };
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (total));
  };

  return (    
      <div className="container">
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 && (
            <Statictics
              good={good}
              neutral={neutral}
            bad={bad}
            total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
          {!total && (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
};
