import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import svg from 'assets/svg';
import axios from 'axios';
import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import { useState } from 'react';
import * as S from './styles';

const ViewAbout = () => {
  const navigate = useNavigate();
  const [postalCode, setPostalCode] = useState<string>('03542000');
  const [data, setData] = useState<any>();

  const handleLookup = async () => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${postalCode}/json/`,
      );

      const address: any = response.data;

      setData({
        address: address.logradouro,
        neighborhood: address.bairro,
        city: address.localidade,
      });
    } catch (error) {
      alert('Erro ao consultar o endereço');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <Header activeMenu={EActiveView.about} />
        <S.ButtonBack>
          <ButtonGoHome />
        </S.ButtonBack>
      </S.Header>
      <S.Body>
        <S.Cols>
          <S.MeAbout />
          <S.Form>
            <S.Label>Search</S.Label>
            <S.BaseInput>
              <S.Input
                value={postalCode}
                onChange={(event) => {
                  setPostalCode(event.target.value);
                }}
              />
              <S.ButtonSearch onClick={handleLookup}>Pesquisar</S.ButtonSearch>
            </S.BaseInput>
            {data && (
              <S.BaseLine>
                <S.Label>Address</S.Label>
                <S.DisplayAddress>{data.address}</S.DisplayAddress>
                <S.Label>Neighborhood</S.Label>
                <S.DisplayNeighborhood>
                  {data.neighborhood}
                </S.DisplayNeighborhood>
                <S.Label>City</S.Label>
                <S.DisplayCity>{data.city}</S.DisplayCity>
              </S.BaseLine>
            )}
          </S.Form>
        </S.Cols>
        <S.Cols>
          <S.BaseTitle>
            <S.MyTitle />
            <S.Description>
              I{"'"}m 27 years old and I{"'"}m an enthusiastic software
              developer, single and student. <br />
              My passion is creating innovative and effective solutions through
              programming. With a solid technical foundation, I am recognized
              for my ability to collaborate harmoniously in diverse teams,
              contributing to the success of innovative projects. Additionally,
              I am extroverted and love interacting with teammates and project
              partners.
            </S.Description>
            <S.BaseIcon>
              <S.Icon>
                <svg.Phone />
                <S.IconTitle>PHONE</S.IconTitle>
                <S.IconValue>00 41 1 617 3523467</S.IconValue>
              </S.Icon>

              <S.Icon>
                <svg.Mail />
                <S.IconTitle>MAIL</S.IconTitle>
                <S.IconValue>bia.silva@outlook.com</S.IconValue>
              </S.Icon>
            </S.BaseIcon>
          </S.BaseTitle>
        </S.Cols>
      </S.Body>
    </S.Container>
  );
};

export default ViewAbout;
