import React, { useState, useEffect } from 'react';

const TypingEffect = ({ phrase, typingSpeed }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setCurrentText(phrase.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentText(''); // Limpa o texto
        }, 1000); // Tempo para mostrar a frase completa antes de limpar
      }

      // Reinicia a digitação quando atinge o comprimento total da frase
      if (currentIndex === phrase.length + 1) {
        currentIndex = 0;
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [phrase, typingSpeed]);

  return (
    <div>
      <p>{currentText}</p>
    </div>
  );
};

const EfeitoDigitar = () => {
  return (
    <div>
      <TypingEffect phrase="Conheça a Fatec." typingSpeed={300} />
    </div>
  );
};

export default EfeitoDigitar;
