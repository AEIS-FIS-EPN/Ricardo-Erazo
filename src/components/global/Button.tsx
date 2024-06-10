interface ButtonProps {
  href?: string;
  children: string;
}

const Button = (props: { href: string ,children: string }) => {
  if (props.href) {
    return (
      <a href={props.href} target='_blank' rel='noreferrer'>
        <button className='h-8 w-24 lg:w-36 bg-[--color1] rounded-md hover:border hover:border-[--color6] hover:bg-[--color3]'>
          {props.children}
        </button>
      </a>
    )
  }
  return (
    <button className='h-8 w-24 lg:w-36 bg-[--color1] rounded-md hover:border hover:border-[--color6] hover:bg-[--color3]'>
      {props.children}
    </button>
  );
}

export default Button;
