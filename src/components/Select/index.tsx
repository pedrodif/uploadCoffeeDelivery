interface IOptionProps {
  id: string;
  value: string;
}

interface ISelectProps {
  data: IOptionProps[];
}

export function Select({ data }: ISelectProps) {
  return(
    <select>
      {data.map(option => {
        return (
          <option
            key={option.id}
            value={option.value}
          >
            {option.value}
          </option>
        )
      })}
    </select>
  )
}