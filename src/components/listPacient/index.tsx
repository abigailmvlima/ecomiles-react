import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { TListPacient } from 'domains/types/TListPacient';
type TProps = {
  data: TListPacient[];
};

const ListPacient = ({ data }: TProps) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      {data.map((pacient: TListPacient, key: number) => {
        return (
          <S.Row key={key}>
            <S.ColPacient>{pacient.nome}</S.ColPacient>
            <S.ColPhone>{pacient.phone}</S.ColPhone>
            <S.ColMail>{pacient.mail}</S.ColMail>
            <S.ColDateBirth>{pacient.dateBirth}</S.ColDateBirth>
            <S.ColCity>{pacient.city}</S.ColCity>
            <S.ColActions>X</S.ColActions>
          </S.Row>
        );
      })}
    </S.Container>
  );
};

export default ListPacient;
