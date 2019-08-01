import * as React from 'react';
import * as ReactDom from 'react-dom';

/**
 * Simple wrapper for react-material-ui-form-validator that does 2 things:
 *
 *  1. Combines validators and errorMessages properties into single, more intuitive
 *     validators object property that uses validators as key and errorMessage as value
 *
 *  2. Passes on ONLY valid, active validators which allows for validators to be
 *     dynamically added without boilerplate of checking whether they are present
 *     or not when calling a component
 */

const {
  SelectValidator: SelectValidatorOriginal,
  TextValidator: TextValidatorOriginal,
  ValidatorForm: ValidatorFormOriginal,
} = require('react-material-ui-form-validator');
const ValidationRules = require('react-form-validator-core/lib/ValidationRules');

export const ValidatorForm = ValidatorFormOriginal;

export const TextValidator = (props: any) => {
  const { validators, ...rest } = props;
  const { rules, errorMessages } = extractValidators(validators);

  return <TextValidatorOriginal {...rest}
    validators={rules}
    errorMessages={errorMessages}
  />;
};

export const SelectValidator = (props: any) => {
  const { validators, formControl, inputLabel, ...rest } = props;
  const { rules, errorMessages } = extractValidators(validators);

  return <SelectValidatorOriginal {...rest}
    validators={rules}
    errorMessages={errorMessages}
  />;
};

const extractValidators = (validators: any) => {
  const noRules = !validators || Object.keys(validators).length === 0;
  // Extracts ONLY active validation rules
  const validationRuleExists = (rule: string) => ValidationRules[rule] !== undefined
    || rule.indexOf('matchRegexp') !== -1;
  const rules = noRules
    ? []
    : Object.keys(validators).filter(validationRuleExists);
  const errorMessages = noRules
    ? []
    : Object.keys(validators).filter(validationRuleExists).map((rule: string) => validators[rule]);
  return { rules, errorMessages };
};
