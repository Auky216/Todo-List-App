import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Activity {
  title: string;
  description: string;
  timeStart: string;
  timeEnd: string;
}

interface ActivityState {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
}

export const useActivityStore = create<ActivityState>()(
  persist(
    (set) => ({
      activities: [],
      addActivity: (activity) =>
        set((state) => ({
          activities: [...state.activities, activity],
        })),
    }),
    {
      name: "activity-storage", // nombre de la key en localStorage
    }
  )
);