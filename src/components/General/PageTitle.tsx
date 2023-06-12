import { ToggleButton } from "../../components";
interface PageTitleProps {
  text: string;
  darkToggle: boolean;
  setDarkToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const PageTitle:React.FC<PageTitleProps> = ({ text, darkToggle, setDarkToggle }) => {
  return (
    <div className=" phone:flex phone:items-center phone:justify-between tablet:justify-center phone:text-xl tablet:text-3xl laptop:text-5xl text-slate-700 dark:text-slate-300 font-bold w-full text-center uppercase h-16  px-2 ">
      <span>{text}</span>
      <ToggleButton darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
    </div>
  );
};

export default PageTitle;
