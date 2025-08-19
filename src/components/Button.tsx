import { FC, PropsWithChildren, useRef } from 'react';
import { AriaButtonOptions, useButton } from 'react-aria';

type ButtonProps = AriaButtonOptions<'button'> & PropsWithChildren;

const Button: FC<ButtonProps> = (props) => {
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);
  return <button {...buttonProps} ref={ref}>{props.children}</button>;
}
export default Button
