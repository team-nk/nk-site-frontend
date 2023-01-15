export interface OptionArrType {
  option: number;
  value: string;
}

export interface DropDownProps {
  options: Array<OptionArrType>;
  value: string;
  onChangeValue: (value: string) => void;
}
