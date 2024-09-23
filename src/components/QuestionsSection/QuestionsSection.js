import React from 'react';
import UserPreferencesForm from '../UserPreferencesForm/UserPreferencesForm';

const QuestionsSection = ({ handleGenerateItinerary, formRef, handleReset }) => {
  return (
    <div className="w-full md:w-1/3 shadow-lg rounded-xl p-4 mb-12 md:mb-0">
      <button onClick={handleReset} className="mb-4 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-500 bg-transparent hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-300">Reset</button>
      <UserPreferencesForm onSubmit={handleGenerateItinerary} ref={formRef} />
    </div>
  );
};

export default QuestionsSection;