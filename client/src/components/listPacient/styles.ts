import svg from 'assets/svg';
import styled, { RuleSet, css } from 'styled-components';
import themes from 'themes/index';

const styledTitle = css`
  font-size: 18px;
  color: ${themes.colors.v5};
  letter-spacing: 2px;
  font-family: ${themes.fontFamily.lato};
  margin: 15px 4px;
  font-weight: 100;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 76px;
  border-radius: 0 0 20px 20px;
  justify-content: space-between;
`;

export const TitleRow = styled.div`
  border-bottom: solid 0.5px #65c2eb;
  align-items: center;
`;

export const Row = styled.div`
  border-bottom: solid 0.5px #65c2eb;
  align-items: center;

  &:hover {
    background-color: #0081b9;
  }
`;
export const ColName = css`
  ${styledTitle};
  flex-grow: 1;
`;

export const ColPhone = css`
  ${styledTitle};
  width: 180px;
`;

export const ColMail = css`
  ${styledTitle};
  width: 350px;
`;

export const ColDateBirth = css`
  ${styledTitle};
  width: 180px;
`;

export const ColCity = css`
  ${styledTitle};
  width: 250px;
`;

export const ColActions = css`
  ${styledTitle};
  width: 80px;
  margin-right: 25px;
  justify-content: center;
`;

export const ccsTitle = css`
  text-transform: uppercase;
  font-weight: bold;
  color: ${themes.colors.white};
  letter-spacing: 2px;
  font-family: ${themes.fontFamily.lato};
`;

interface IDivProps {
  css?: RuleSet<object>;
  ccsTitle?: RuleSet<object>;
}
export const Cols = styled.div<IDivProps>`
  ${styledTitle};
  ${(props: IDivProps) => props.css && props.css};
  ${(props: IDivProps) => props.ccsTitle && props.ccsTitle};
`;

export const Titles = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const IconEdit = styled(svg.IconEdit)`
  cursor: pointer;
`;

export const Icon = styled.div``;
