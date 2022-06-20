import {
  ValidatorConstraint, ValidatorConstraintInterface
} from 'class-validator';

const ARTICLE_SLUG__REX = /^([a-z0-9]{3})+-(?:[-a-z0-9]+)*$/;

@ValidatorConstraint({ name: 'ArticleSlugValidation', async: false })
export class ArticleSlugValidation implements ValidatorConstraintInterface {
  validate(value: string) {
    return ARTICLE_SLUG__REX.test(value);
  }

  defaultMessage() {
    return 'Invalid Slug';
  }
}
