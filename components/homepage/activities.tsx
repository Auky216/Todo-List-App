import ActivityBox from "./activity-box";

export default function Activities() {
  return (
    <div className="p-4 w-full">
      



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
            <ActivityBox
            title="Actividad 1"
            description="Descripción de la actividad 1"
            timeStart="10:00 AM"
            timeEnd="11:00 AM"
            />           
    </div>
    </div>
  );
}   