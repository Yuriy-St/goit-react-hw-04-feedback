import { useState } from 'react';
import AppContainer from './AppContainer.styled';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') setGood(state => state + 1);
    if (option === 'neutral') setNeutral(state => state + 1);
    if (option === 'bad') setBad(state => state + 1);
  };

  const total = good + bad + neutral;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </AppContainer>
  );
}
