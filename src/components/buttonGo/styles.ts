import { EButtonType } from 'domains/enums/EButtons';
import styled from 'styled-components';
import themes from 'themes/index';

interface IContainerProps {
  type: EButtonType;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  background-color: ${(p: IContainerProps) => {
    if (p.type == EButtonType.default) {
      return themes.colors.btDefaultBg;
    } else if (p.type == EButtonType.remove) {
      return themes.colors.btRemoveBg;
    } else if (p.type == EButtonType.save) {
      return themes.colors.btSaveBg;
    } else if (p.type == EButtonType.cancel) {
      return themes.colors.btCancelBg;
    }
    return themes.colors.btDefaultBg;
  }};

  border: 2px solid
    ${(p: IContainerProps) => {
      if (p.type == EButtonType.default) {
        return themes.colors.btDefaultBorder;
      } else if (p.type == EButtonType.remove) {
        return themes.colors.btRemoveBorder;
      } else if (p.type == EButtonType.save) {
        return themes.colors.btSaveBorder;
      } else if (p.type == EButtonType.cancel) {
        return themes.colors.btCancelBorder;
      }
      return themes.colors.btDefaultBorder;
    }};

  border-radius: 15px;
  height: 47px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(p: IContainerProps) => {
      if (p.type == EButtonType.default) {
        return themes.colors.btDefaultBgHover;
      } else if (p.type == EButtonType.remove) {
        return themes.colors.btRemoveBgHover;
      } else if (p.type == EButtonType.save) {
        return themes.colors.btSaveBgHover;
      } else if (p.type == EButtonType.cancel) {
        return themes.colors.btCancelBgHover;
      }
      return themes.colors.btDefaultBgHover;
    }};
  }

  &:active {
    background-color: ${(p: IContainerProps) => {
      if (p.type == EButtonType.default) {
        return themes.colors.btDefaultBgActive;
      } else if (p.type == EButtonType.remove) {
        return themes.colors.btRemoveBgActive;
      } else if (p.type == EButtonType.save) {
        return themes.colors.btSaveBgActive;
      } else if (p.type == EButtonType.cancel) {
        return themes.colors.btCancelBgActive;
      }
      return themes.colors.btDefaultBgActive;
    }};
  }
`;

interface ITitleProps {
  type: EButtonType;
}

export const Title = styled.div<ITitleProps>`
  display: flex;
  text-align: center;
  font-size: 18px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 100;
  letter-spacing: 3px;
  margin: 0 10px;
  flex-wrap: wrap;
  line-height: 35px;
  padding: 0 15px;

  color: ${(p: IContainerProps) => {
    if (p.type == EButtonType.default) {
      return themes.colors.btDefaultColor;
    } else if (p.type == EButtonType.remove) {
      return themes.colors.btRemoveColor;
    } else if (p.type == EButtonType.save) {
      return themes.colors.btSaveColor;
    } else if (p.type == EButtonType.cancel) {
      return themes.colors.btCancelColor;
    }
    return themes.colors.btDefaultColor;
  }};
`;
