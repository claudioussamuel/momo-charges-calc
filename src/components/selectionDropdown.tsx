'use client'

import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { Telco } from "@/utils/interfaces";

interface SelectionDropdownProps {
  telcos: Telco[];
  label: string;
  name: string;
  required?: boolean;
}

export default function SelectionDropdown({ 
    telcos, 
    label,
    name,
    required 
}: SelectionDropdownProps) {
    return ( <Select
        name={name}
        label={label}
        className="w-full mt-4 text-black"
        labelPlacement="outside"
        items={telcos}
        isRequired={required}
        validationState={required ? "valid" : undefined}
        classNames={{
          trigger: "h-14"
        }}
        renderValue={(items) => {
          return items.map((item ) => (
            <div key={item.key} className="flex items-center gap-2 text-black">
              <Avatar 
                alt={item.data?.name} 
                className="flex-shrink-0 text-black" 
                size="sm" 
                src={item.data?.logo} 
              />
              <span className="text-black">{item.data?.name}</span>
            </div>
          ));
        }}
      >
        {(telco) => (
          <SelectItem
            key={telco.name}
            textValue={telco.name}
            startContent={
              <Avatar 
                alt={telco.name} 
                className="w-6 h-6 text-black" 
                src={telco.logo} 
              />
            }
          >
            {telco.name}
          </SelectItem>
        )}
      </Select>)
}