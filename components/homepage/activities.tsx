"use client";
import ActivityBox from "./activity-box";
import ModalAddActivity from "./modal-add-activity";
import { useActivityStore } from "@/store/activityStore";

import { useState } from 'react';


export default function Activities() {
  const activities = useActivityStore((state) => state.activities);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  return (
    <div className="p-4 w-full">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-extrabold text-xl mb-2 text-black">Actividades</h1>
        <div className="flex justify-end">
          <button onClick={() => setIsModalOpen(true)} className="bg-black text-white p-4 m-4">
            Crear nueva actividad
          </button>
        </div>
      </div>

      <div className="gap-4 mt-4 ">
        {activities.map((activity, index) => (
          <ActivityBox
            key={index}
            title={activity.title}
            description={activity.description}
            timeStart={activity.timeStart}
            timeEnd={activity.timeEnd}
          />
        ))}
      </div>

      <ModalAddActivity
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title=""
        description=""
        timeStart=""
        timeEnd=""
      />
      
    </div>
  );
}
