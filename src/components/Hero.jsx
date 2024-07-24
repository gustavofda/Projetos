import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha os itens à esquerda */
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: left; /* Alinha o texto à esquerda */
  position: relative;
  padding: 20px; /* Adiciona espaço ao redor do texto */
  background-image: url('/images/your-image.jpg'); /* Ajuste o caminho da imagem conforme o nome */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const TextContainer = styled.div`
  max-width: 600px; /* Define uma largura máxima para o contêiner de texto */
  margin-right: 20px; /* Adiciona espaço ao lado direito, se necessário */
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin: 0;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 20px; /* Espaço entre o título e o subtítulo */
`;

const Hero = () => (
  <HeroSection>
    <TextContainer>
      <HeroTitle
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        UTOPIA por Travis Scott
      </HeroTitle>
      <HeroSubtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        "Utopia é algo que as pessoas sentem que é tão rebuscado e fora de alcance, um estado de espírito perfeito. Mas você mesmo cria. Há pessoas que alcançam a utopia todos os dias. Elas podem não ser as pessoas mais ricas com os berços mais maneiros, mas é uma utopia onde quer que estejam, e isso é o máximo que você pode ter. 
        Novas curas, novos edifícios, novas ruas, novas avenidas para as pessoas seguirem em frente. As pessoas precisam ver que a utopia é real".
      </HeroSubtitle>
    </TextContainer>
  </HeroSection>
);

export default Hero;