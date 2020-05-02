interface FunctionAsChildren<T> {
  children: (data: T) => JSX.Element;
  data: T;
}

const FunctionAsChildren = <T extends {}>({
  data,
  children,
}: FunctionAsChildren<T>) => {
  return children(data);
};

export default FunctionAsChildren;
