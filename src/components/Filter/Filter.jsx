import { Input, Label, Span } from './Filter.styled';

export function Filter({ valueFilter, onChangeFilter }) {
  return (
    <Label>
      <Span> Find contacts by name </Span>
      <Input
        placeholder="Search"
        type="text"
        value={valueFilter}
        onChange={onChangeFilter}
      />
    </Label>
  );
}
