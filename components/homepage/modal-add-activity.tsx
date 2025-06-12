interface ModalAddActivityProps {
  isOpen: boolean;
    onClose: () => void;
  title: string;
  description: string;
  timeStart: string;
  timeEnd: string;
}

export default function ModalAddActivity(props: ModalAddActivityProps) {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white border-4 border-black w-full max-w-md bg-third shadow-[4px_4px_0_0_#000] p-6">
        <h2 className="font-extrabold text-2xl mb-4 text-black">Crear nueva Actividad</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="font-bold text-black">Título</label>
            <input
              type="text"
              className="border-2 border-black w-full p-2 mb-2 bg-white shadow-[2px_2px_0_0_#000]"
              placeholder="Ingrese el título de la actividad"
              defaultValue={props.title}
            />
          </div>
          <div>
            <label className="font-bold text-black">Descripción</label>
            <textarea
              className="border-2 border-black w-full p-2 mb-2 bg-white shadow-[2px_2px_0_0_#000] resize-none"
              placeholder="Ingrese la descripción"
              defaultValue={props.description}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="font-bold text-black">Inicio</label>
              <input
                type="time"
                className="border-2 border-black w-full p-2 bg-white shadow-[2px_2px_0_0_#000]"
                defaultValue={props.timeStart}
              />
            </div>
            <div className="flex-1">
              <label className="font-bold text-black">Fin</label>
              <input
                type="time"
                className="border-2 border-black w-full p-2 bg-white shadow-[2px_2px_0_0_#000]"
                defaultValue={props.timeEnd}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="border-2 border-black bg-white px-4 py-2 shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-white transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="border-2 border-black bg-black text-white px-4 py-2 shadow-[2px_2px_0_0_#000] hover:bg-white hover:text-black transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
