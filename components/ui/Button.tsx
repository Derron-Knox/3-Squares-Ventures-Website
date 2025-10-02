import React, { PropsWithChildren } from 'react';

// FIX: Converted Button to a polymorphic component to support rendering as different elements (e.g., 'a' tag for links).
// This resolves the error in Hero.tsx where an `as="a"` prop was being passed to Button.

// Base props shared by all variants of the Button
type BaseButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

// Generic props for a polymorphic component, allowing `as` prop and forwarding other props.
// FIX: Wrapped with PropsWithChildren and adjusted Omit to correctly type the 'children' prop, resolving multiple cascading type errors.
type ButtonProps<E extends React.ElementType> = PropsWithChildren<
  BaseButtonProps & {
    as?: E;
  } & Omit<React.ComponentPropsWithoutRef<E>, keyof BaseButtonProps | 'as' | 'children'>
>;

const Button = <E extends React.ElementType = 'button'>({
  children,
  variant = 'primary',
  className = '',
  as,
  ...props
}: ButtonProps<E>) => {
  const Component = as || 'button';

  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 font-headline text-lg font-bold uppercase tracking-wider transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm';

  const variantStyles = {
    primary: 'bg-brand-gold text-white hover:bg-opacity-90 focus:ring-brand-gold',
    secondary: 'bg-brand-blue text-white hover:bg-opacity-90 focus:ring-brand-blue',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-gray focus:ring-white',
  };

  return (
    <Component className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;
