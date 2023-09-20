// Imports
import { useState } from "react";
import Select from 'react-select';

// Style
import SelectCategoryStyled from "./style"

// Interfaces
interface Option {
  value: string;
  label: string;
}

interface Props {
  textCategory: string;
}

const SelectCategory = ({ textCategory }: Props) => {

  const [selectedOptionCategory, setSelectedOptionCategory] = useState<Option | null>(
    { value: 'select', label: `${textCategory}` }
  );

  const options: Option[] = [
    { value: 'congressos-e-seminarios', label: 'Congressos e Seminários' },
    { value: 'shows-e-entretenimentos', label: 'Shows e Entretenimento' },
    { value: 'religiao-e-espiritualidade', label: 'Religião e Espiritualidade' },
    { value: 'feiras-e-exposicoes', label: 'Feiras e Exposições' },
    { value: 'cursos-e-workshops', label: 'Cursos e Workshops' },
    { value: 'encontros-e-networking', label: 'Encontros e Networking' },
    { value: 'esporte-e-lazer', label: 'Esporte e Lazer' },
    { value: 'outros', label: 'Outros' }
  ]

  const handleSelectChangeCategory = (
    newValue: Option | null
  ) => {
    setSelectedOptionCategory(newValue);
  }

  return (
    <SelectCategoryStyled medium='medium' disable='disable'>
      <Select
        key="select-component-category"
        value={selectedOptionCategory}
        onChange={handleSelectChangeCategory}
        options={options}
        classNamePrefix="select-category"
        classNames={{
          control: (state) =>
            `${state.isFocused ? 'selected' : 'unselected'} ${selectedOptionCategory?.value !== 'select' ? 'selected' : ''}`,
        }}
      />
    </SelectCategoryStyled>
  )
}

export default SelectCategory;
