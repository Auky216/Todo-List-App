interface ActivityBoxProps {
    title: string;
    description: string; 
    timeStart: string;
    timeEnd: string;
    }

export default function ActivityBox( props: ActivityBoxProps) {
  return (
    <div className="p-4 border-2 border-b-5 border-l-5 bg-third w-full">
        <h2 className="font-bold text-xl">{props.title}</h2>
        <div className="mt-4 flex gap-4">
            <span className="text-sm text-black">Inicio: {props.timeStart}</span>
            <br />
            <span className="text-sm text-black">Fin: {props.timeEnd}</span>
        </div>
    </div>
  );
}