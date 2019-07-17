export interface DtoMetadata {
  PropertiesMetadata: PropertyMetadata[];
}

export class PropertyMetadata {
  public Name: string;
  public ControlType: ControlType = 'Text';
  public DataTypeName: string;
  public DisplayName: string;
  public IsKey?: boolean;
  public IsRequired?: boolean;
  public IsRequiredTrue?: boolean;
  public IsEmail?: boolean;
  public MinLength?: number;
  public MaxLength?: number;
  public Regex?: string;
  public CompareWithOtherProperty?: string;

  public HideForDisplay?: boolean;
  public HideForAdd?: boolean;
  public HideForEdit?: boolean;

}

export type ControlType = 'Text' | 'Number' | 'Date' | 'AutoComplete' | 'DateTime' | 'RadioButton' | 'Dropdown';

