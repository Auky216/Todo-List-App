interface ActivityBoxProps {
  title: string;
  description: string;
  timeStart: string;
  timeEnd: string;
}

export default function ActivityBox(props: ActivityBoxProps) {
  return (
    <div className="border-4 border-black w-full bg-third shadow-[4px_4px_0_0_#000] p-4">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          className="appearance-none w-6 h-6 border-4 border-black bg-white checked:bg-black checked:border-black mr-4 cursor-pointer transition-all duration-100 shadow-[2px_2px_0_0_#000]"
          style={{
            outline: "none",
            boxShadow: "2px 2px 0 0 #000",
          }}
        />
        <div className="flex-1">
          <h2 className="font-extrabold text-xl mb-2 text-black">
            {props.title}
          </h2>
          <p className="text-black mb-2">{props.description}</p>
          <div className="flex gap-8">
            <span className="text-sm text-black font-mono border-2 border-black px-2 py-1 bg-white shadow-[2px_2px_0_0_#000]">
              Inicio: {props.timeStart}
            </span>
            <span className="text-sm text-black font-mono border-2 border-black px-2 py-1 bg-white shadow-[2px_2px_0_0_#000]">
              Fin: {props.timeEnd}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
