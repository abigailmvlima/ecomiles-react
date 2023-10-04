import {
  EPacientTitles,
  TListPacient,
  TTitles,
} from 'domains/types/TListPacient';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

type TProps = {
  data: TListPacient[];
};

const ListPacient = ({ data }: TProps) => {
  const navigate = useNavigate();
  const [titles, setTitles] = useState<TTitles[]>();

  useEffect(() => {
    const temp: TTitles[] = [
      {
        name: EPacientTitles.name,
        label: 'nome',
        css: S.ColName,
        ccsTitle: S.ccsTitle,
      },
      {
        name: EPacientTitles.phone,
        label: 'celular',
        css: S.ColPhone,
        ccsTitle: S.ccsTitle,
      },
      {
        name: EPacientTitles.mail,
        label: 'e-mail',
        css: S.ColMail,
        ccsTitle: S.ccsTitle,
      },
      {
        name: EPacientTitles.birthDate,
        label: 'Dt.Nascimento',
        css: S.ColDateBirth,
        ccsTitle: S.ccsTitle,
      },
      {
        name: EPacientTitles.city,
        label: 'Cidade',
        css: S.ColCity,
        ccsTitle: S.ccsTitle,
      },
      {
        name: EPacientTitles.actions,
        label: 'Editar',
        icon: S.IconEdit,
        css: S.ColActions,
        ccsTitle: S.ccsTitle,
      },
    ];

    setTitles(temp);
  }, []);

  return (
    <S.Container>
      <S.Titles>
        <S.TitleRow>
          {Array.isArray(titles) &&
            titles.map((title: TTitles, key: number) => (
              <S.Cols
                key={`${key}${title.label}`}
                css={title.css}
                ccsTitle={title.ccsTitle}
              >
                {title.label}
              </S.Cols>
            ))}
        </S.TitleRow>
      </S.Titles>

      {Array.isArray(data) &&
        data.map((pacient: TListPacient, key1: number) => {
          return (
            <S.Row key={`${key1}-rows`}>
              {Array.isArray(titles) &&
                titles.map((title: TTitles, key2: number) => (
                  <S.Cols key={`${key1}${key2}`} css={title.css}>
                    {title.name == 'actions' ? (
                      <S.Icon
                        onClick={() => {
                          const params = { titles, pacient };
                          navigate('/cadastro', { state: { pacient } });
                        }}
                      >
                        <title.icon />
                      </S.Icon>
                    ) : (
                      pacient[title.name].title
                    )}
                  </S.Cols>
                ))}
            </S.Row>
          );
        })}
    </S.Container>
  );
};

export default ListPacient;
