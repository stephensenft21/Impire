'use client';

import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Calendar } from '@radix-ui/react-calendar';
import { motion } from 'framer-motion';

const CalendarUI = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Schedule a Meeting</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            Choose a Date
          </button>
        </Popover.Trigger>
        <Popover.Content className="p-4 bg-white border shadow-lg rounded-lg">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => setSelectedDate(date)}
            className="w-full"
          />
          <Popover.Close className="absolute top-2 right-2 text-gray-500">
            &times;
          </Popover.Close>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default CalendarUI;
