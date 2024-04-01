const Button = (props: { children: string }) => {
  return (
    <button className='h-8 w-24 lg:w-36 bg-[--color1] rounded-md hover:border hover:border-[--color6] hover:bg-[--color3]'>
      {props.children}
    </button>
  );
}

export default Button;
