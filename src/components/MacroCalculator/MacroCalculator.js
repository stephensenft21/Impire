// MacroCalculator Component
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Inset } from "@radix-ui/themes";
import { useMacroContext } from "../../context/MacroContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const MacroCalculator = () => {
  const { macroData, calculateMacros } = useMacroContext();
  const [form, setForm] = useState({
    weight: "",
    feet: "",
    inches: "",
    age: "",
    gender: "male",
    activityLevel: "1.2",
    goal: "maintain",
    goalWeight: "",
  });
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    calculateMacros(form);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  const handleClearChart = () => {
    setForm({
      weight: "",
      feet: "",
      inches: "",
      age: "",
      gender: "male",
      activityLevel: "1.2",
      goal: "maintain",
      goalWeight: "",
    });
  };

  const chartData = macroData ? [
    { name: 'Protein', value: macroData.protein },
    { name: 'Carbs', value: macroData.carbs },
    { name: 'Fats', value: macroData.fats }
  ] : [];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-purple-500 text-white px-4 py-2 rounded">
          Macro Calculator
        </motion.button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg w-full max-w-md">
          <Dialog.Title className="text-lg font-bold mb-4">
            Macro Calculator
          </Dialog.Title>
          <Dialog.Close asChild>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
            >
              <Cross2Icon />
            </motion.button>
          </Dialog.Close>

          <Inset>
            <div className="flex flex-col gap-4">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                name="weight"
                type="number"
                placeholder="Weight (kg)"
                value={form.weight}
                onChange={handleChange}
                className="border p-2 rounded placeholder-gray-400 text-gray-700"
              />
              <div className="flex gap-2">
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  name="feet"
                  type="number"
                  placeholder="Height (feet)"
                  value={form.feet}
                  onChange={handleChange}
                  className="border p-2 rounded placeholder-gray-400 text-gray-700"
                />
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  name="inches"
                  type="number"
                  placeholder="Height (inches)"
                  value={form.inches}
                  onChange={handleChange}
                  className="border p-2 rounded placeholder-gray-400 text-gray-700"
                />
              </div>

              <motion.input
                whileFocus={{ scale: 1.05 }}
                name="age"
                type="number"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
                className="border p-2 rounded placeholder-gray-400 text-gray-700"
              />

              <motion.select
                name="goal"
                value={form.goal}
                onChange={handleChange}
                className="border p-2 rounded placeholder-gray-400 text-gray-700"
              >
                <option value="maintain">Maintain</option>
                <option value="gain">Gain</option>
                <option value="lose">Lose</option>
              </motion.select>

              <motion.input
                whileFocus={{ scale: 1.05 }}
                name="goalWeight"
                type="number"
                placeholder="Goal Weight (kg)"
                value={form.goalWeight}
                onChange={handleChange}
                className="border p-2 rounded placeholder-gray-400 text-gray-700"
              />

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSubmit}
                className="bg-purple-500 text-white px-4 py-2 rounded"
              >
                Calculate
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClearChart}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Clear Chart
              </motion.button>

              {macroData && (
                <div className="mt-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={chartData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </Inset>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MacroCalculator;
