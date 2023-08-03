"use client";

import { Button } from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";
interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter = ({ sizes, colors }: MobileFilterProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filtros
        <Plus size={20} />
      </Button>
      <Dialog onClose={onClose} open={open} className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* Posicion del Modal*/}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex flex-col h-full w-full max-w-xs  overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Cerrar Modal*/}
            <div className="flex items-center just px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            {/* Mostrar Filtros en Modal*/}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Tallas" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
