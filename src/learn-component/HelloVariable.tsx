interface HelloVariableProps {
  name: string;
  age: number;
  verify?: boolean;
}

function HelloVariable({ name, age, verify }: HelloVariableProps) {
  return (
    <div>
      Hello {name} age: {age} verify: {verify ? "true" : "false"}
    </div>
  );
}

export default HelloVariable;
