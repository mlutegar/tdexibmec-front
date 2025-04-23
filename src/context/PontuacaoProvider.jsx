import React, { createContext, useState, useContext, useEffect } from 'react';
const PontuacaoContext = createContext();
const PONTOS_POR_ACERTO = 20;

export function PontuacaoProvider({ children }) {
    const [pontuacao, setPontuacao] = useState(localStorage.getItem('pontuacao'));

    // Carrega a pontuação do localStorage quando o componente é montado
    useEffect(() => {
        const pontuacaoSalva = localStorage.getItem('pontuacao');
        if (pontuacaoSalva) {
            setPontuacao(parseInt(pontuacaoSalva));
        }
    }, []);

    // Salva a pontuação no localStorage sempre que ela mudar
    useEffect(() => {
        localStorage.setItem('pontuacao', pontuacao.toString());
    }, [pontuacao]);

    // Função para adicionar pontos
    const adicionarPontos = () => {
        setPontuacao(pontuacaoAtual => pontuacaoAtual + PONTOS_POR_ACERTO);
    };

    // Função para resetar pontuação
    const resetarPontuacao = () => {
        setPontuacao(0);
    };

    // Valor que será disponibilizado pelo contexto
    const value = {
        pontuacao,
        adicionarPontos,
        resetarPontuacao
    };

    return (
        <PontuacaoContext.Provider value={value}>
            {children}
        </PontuacaoContext.Provider>
    );
}

// Hook personalizado para usar o contexto
export function usePontuacao() {
    const context = useContext(PontuacaoContext);
    if (context === undefined) {
        throw new Error('usePontuacao deve ser usado dentro de um PontuacaoProvider');
    }
    return context;
}