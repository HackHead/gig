import { ReactNode } from "react";

export type FieldProps = {
  label?: string;
  icon?: ReactNode;
} & React.HTMLAttributes<HTMLInputElement>;

const Field = ({ label, icon, ...attributes }: FieldProps) => {
  return (
    <div>
      {label ?? <label htmlFor="email" className="sr-only">{label}</label>}
      <div className="relative ">
        <input {...attributes} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"/>
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default Field;
