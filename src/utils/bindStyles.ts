import classNames from 'classnames/bind';

type ClassNames = Record<string, boolean>;
type CxReturn = ((base: string, classes?: ClassNames) => string)
& ((classes: ClassNames) => string);

export const withModifiers = (base: string, classes: ClassNames | string[] | string) => {
  const modifiers: Record<string, boolean> = {};
  if (typeof classes === 'string') {
    classes = [classes]
  }
  const target = Array.isArray(classes) ? classes.map(k=>[k, true]) : Object.entries(classes);
  target.forEach(([key, value]) => {
    if (!!value) {
      modifiers[`${base}_${key}`] = true;
    }
  });
  return {
    [base]: true,
    ...modifiers,
  };
};

/** Use styles to construct css classNames.
 * Usage:
 *   import styles from './Some.module.scss';
 *   const cx = getCx(styles);
 */
const bindStyles = (styles: Readonly<Record<string, string>>): CxReturn => {
  const c = classNames.bind(styles);

  /**
   * Get the string classNames from styles.
   *
   * These examples assume that the SCSS module transforms to `Component_{x}`
   * Use with a string:
   * ```tsx
   * <Component classNames={cx('base')}/> // <Component classNames="Component_base"/>
   * ```
   *
   * Objects:
   * ```tsx
   * <Component classNames={cx({ base: true })}/> // <Component classNames="Component_base"/>
   * ```
   *
   * Multiple names:
   * ```tsx
   * <Component classNames={cx({ base: true, other: true })}/>
   * // <Component classNames="Component_base Component_base"/>
   * ```
   */
  return function cx(base: ClassNames | string|string[], classes: ClassNames | string[] | string = {}): string {
    if (typeof (base) === 'string') {
      return c(withModifiers(base, classes));
    }
    if (Array.isArray(base)) {
      return c(...base);
    }
    return c(base);
  };
};

export default bindStyles;
