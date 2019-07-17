import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DtoMetadata } from '../models';
import { IrsValidators } from './irs-validators';

export class FormHelper {

  public static toFormGroup(metadata: DtoMetadata, model?: any): FormGroup {
    const group: any = {};
    const modelMetadatas = metadata.PropertiesMetadata;
    modelMetadatas.forEach((modelMetaData) => {

      const validationArray: any[] = [];
      if (modelMetaData.IsRequired) {
        validationArray.push(Validators.required);
      }

      if (modelMetaData.IsRequiredTrue) {
        validationArray.push(Validators.requiredTrue);
      }

      if (modelMetaData.IsEmail) {
        validationArray.push(IrsValidators.customEmail);
      }

      if (modelMetaData.CompareWithOtherProperty) {
        validationArray.push(IrsValidators.matchOtherValidator(modelMetaData.CompareWithOtherProperty));
      }

      if (modelMetaData.MinLength) {
        validationArray.push(Validators.minLength(modelMetaData.MinLength));
      }

      if (modelMetaData.MaxLength) {
        validationArray.push(Validators.maxLength(modelMetaData.MaxLength));
      }

let value = undefined;
if(model){
  value = (model[modelMetaData.Name] === false ? false : (model[modelMetaData.Name] || undefined));
} else {
value = modelMetaData.IsKey ? 0 : undefined;
}

        group[modelMetaData.Name] = new FormControl(
          value
          , validationArray);
    });

    return new FormGroup(group);
  }

  public static toFormGroupFromModel(model: any, markAllRequired?: boolean): FormGroup {
    const group: any = {};
    Object.keys(model).forEach(key => {

      const validationArray: any[] = [];
      if (markAllRequired) {
        validationArray.push(Validators.required);
      }
      group[key] = new FormControl((model[key] === false ? false : (model[key])), validationArray);
    });

    return new FormGroup(group);
  }
}
