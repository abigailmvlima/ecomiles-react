import svg from 'assets/svg';
import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const cartItems = [
  {
    title: 'Kindle 11ª Geração Amazon 6” 16GB 300 ppi Wi-Fi',
    miles: '29.507 milhas',
    image: require('../../assets/png/kindle.png'),
  },
  {
    title: 'Xicaras Coloridas 210Ml p/ Café Leite e Chá 4 und c/ Suporte',
    miles: '12.000 milhas',
    image: require('../../assets/png/xicaras.png'),
  },
  {
    title: 'LEGO Classic Diversão Neon Criativa 333 Peças',
    miles: '16.900 milhas',
    image: require('../../assets/png/lego.png'),
  },
];

const ViewCart = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.ButomLogo>
          <S.Logo
            src={require('../../assets/png/iconEcoMiles.png')}
            alt="Ecomiles Logo"
          />
          <S.ButomBase
            onClick={() => {
              navigate(`/${EActiveView.home}`);
            }}
          >
            <S.ButomImage>
              <svg.Back />
            </S.ButomImage>
            <S.ButomDescription>Voltar</S.ButomDescription>
          </S.ButomBase>
        </S.ButomLogo>
        <S.Profile>
          <S.Greeting>Olá, Abigail</S.Greeting>
          <S.Miles>58.407 milhas</S.Miles>
          <S.Logout
            onClick={() => {
              navigate(`/${EActiveView.login}`);
            }}
          >
            sair
          </S.Logout>
        </S.Profile>
      </S.Header>
      <S.Title>Carrinho</S.Title>
      <S.CartList>
        {cartItems.map((item, index) => (
          <S.CartItem key={index}>
            <S.ItemImage src={item.image} alt={item.title} />
            <S.ItemDetails>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemMiles>{item.miles}</S.ItemMiles>
            </S.ItemDetails>
            <S.RemoveButton>
              <svg.Trash />
            </S.RemoveButton>
          </S.CartItem>
        ))}
      </S.CartList>
      <S.TotalMiles>Total Milhas: 58.407</S.TotalMiles>
      <S.FinishButton>Finalizar</S.FinishButton>
    </S.Container>
  );
};

export default ViewCart;
