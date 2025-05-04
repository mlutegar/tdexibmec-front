// Avatar.tsx (ou .jsx)
import React from 'react';
import { Homem1 } from './svgs/avatars/Homem1';
import { Homem2 } from './svgs/avatars/Homem2';
import { Homem3 } from './svgs/avatars/Homem3';
import { Mulher1 } from './svgs/avatars/Mulher1';
import { Mulher2 } from './svgs/avatars/Mulher2';
import { Mulher3 } from './svgs/avatars/Mulher3';
import { Mulher4 } from './svgs/avatars/Mulher4';
import { Robo1 } from './svgs/avatars/Robo1';
import { Robo2 } from './svgs/avatars/Robo2';

const avatarMap = {
    homem1: Homem1,
    homem2: Homem2,
    homem3: Homem3,
    mulher1: Mulher1,
    mulher2: Mulher2,
    mulher3: Mulher3,
    mulher4: Mulher4,
    robo1: Robo1,
    robo2: Robo2,
};

/**
 * Retorna o componente SVG correspondente ao nome.
 * @param name string — ex: "homem1", "mulher3", "robo2"
 * @param className opcional, para estilização
 */
export function getAvatar(name) {
    const key = name.toLowerCase();
    const Component = avatarMap[key];
    if (!Component) {
        console.warn(`Avatar "${name}" não encontrado.`);
        return null;
    }
    return <Component/>;
}
