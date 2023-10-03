import { EVisualTheme } from "@domain/enum/EVisualTheme";
import * as St from "./styles";

const Texts = ({
  children,
  visualTheme = EVisualTheme.light,
}: {
  children: any;
  visualTheme?: EVisualTheme;
}) => {
  return <St.Container visualTheme={visualTheme}>{children}</St.Container>;
};

export default Texts;
