import { BadgeProps } from "types";

const Badge = ({ title }: BadgeProps) => {
  return (
    <div className="mt-2 w-14 h-7 flex border-2 items-center justify-center dark:bg-darkblue mr-2 rounded">
      {title}
    </div>
  );
};

export default Badge;
