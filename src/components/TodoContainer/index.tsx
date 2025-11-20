import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

interface TodoContainerProps {
  children: React.ReactNode;
}

const TodoContainer = ({ children }: TodoContainerProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${themeConfig[theme].layout.backgroundColor} h-dvh`}>
      <div className={`${themeConfig[theme].layout.heroClass}`}>
        <div className="m-auto max-w-175 p-8">{children}</div>
      </div>
    </main>
  );
};

export default TodoContainer;
