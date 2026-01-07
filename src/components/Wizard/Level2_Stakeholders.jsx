import React from 'react';

const Level2_Stakeholders = ({ data, update, next, back }) => {

  // The "Characters" available to choose
  const stakeholdersList = [
    { id: 'teachers', name: 'Teachers', icon: '👨‍🏫', desc: 'Classroom delivery' },
    { id: 'students', name: 'Students', icon: '🎓', desc: 'Primary beneficiaries' },
    { id: 'hm', name: 'Headmaster', icon: '🏫', desc: 'School leadership' },
    { id: 'parents', name: 'Parents', icon: '👨‍👩‍👧', desc: 'Home support' },
    { id: 'district', name: 'District Officer', icon: '👮', desc: 'Admin support' },
    { id: 'community', name: 'Community', icon: '🤝', desc: 'Local resources' },
  ];

  // Function to handle clicking a card (Toggle logic)
  const toggleSelection = (id) => {
    const currentSelection = data.stakeholders || [];
    
    if (currentSelection.includes(id)) {
      // If already selected, REMOVE it
      update('stakeholders', currentSelection.filter(item => item !== id));
    } else {
      // If not selected, ADD it
      update('stakeholders', [...currentSelection, id]);
    }
  };

  return (
    <div className="animate-fade-in text-white">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-2 text-blue-400">Level 2: Assemble the Team</h2>
      <p className="text-gray-400 mb-8">Who are the key players in this system? Select all that apply.</p>

      {/* The Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stakeholdersList.map((person) => {
          
          const isSelected = data.stakeholders.includes(person.id);

          return (
            <div 
              key={person.id}
              onClick={() => toggleSelection(person.id)}
              className={`cursor-pointer relative p-4 rounded-xl border-2 transition-all duration-300 group
                ${isSelected 
                  ? "bg-slate-700 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105" 
                  : "bg-slate-800 border-slate-700 hover:border-slate-500 hover:bg-slate-750"
                }
              `}
            >
              {/* Checkmark Badge (Only shows if selected) */}
              {isSelected && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  SELECTED
                </div>
              )}

              {/* Icon & Text */}
              <div className="text-4xl mb-3">{person.icon}</div>
              <h3 className={`font-bold text-lg ${isSelected ? 'text-blue-300' : 'text-gray-200'}`}>
                {person.name}
              </h3>
              <p className="text-xs text-gray-500">{person.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4 border-t border-slate-700">
        <button 
          onClick={back}
          className="px-6 py-2 text-slate-400 hover:text-white transition-colors font-semibold"
        >
          ← Back to Level 1
        </button>

        <button 
          onClick={next}
          disabled={data.stakeholders.length === 0} // Disable if nothing selected
          className={`px-8 py-3 rounded-full font-bold transition-all ${
            data.stakeholders.length > 0 
              ? "bg-blue-600 hover:bg-blue-500 hover:scale-105 text-white shadow-lg shadow-blue-500/30" 
              : "bg-slate-700 text-slate-500 cursor-not-allowed"
          }`}
        >
          Confirm Team →
        </button>
      </div>

    </div>
  );
};

export default Level2_Stakeholders;