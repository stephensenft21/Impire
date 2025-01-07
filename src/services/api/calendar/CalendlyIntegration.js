import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyIntegration = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
      <InlineWidget
        url="https://calendly.com/your-calendly-url"
        styles={{
          height: '600px',
          width: '100%',
        }}
      />
    </div>
  );
};

export default CalendlyIntegration;