import {SelecoesAvatarStyle} from "./Style";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import {Homem1} from "../../svgs/avatars/Homem1";
import {Robo1} from "../../svgs/avatars/Robo1";
import {Mulher1} from "../../svgs/avatars/Mulher1";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useState} from "react";
import {Homem2} from "../../svgs/avatars/Homem2";
import {Homem3} from "../../svgs/avatars/Homem3";
import {Mulher2} from "../../svgs/avatars/Mulher2";
import {Mulher3} from "../../svgs/avatars/Mulher3";
import {Mulher4} from "../../svgs/avatars/Mulher4";
import {Robo2} from "../../svgs/avatars/Robo2";

const SelecoesAvatar = () => {
    const [ativo, setAtivo] = useState(null);

    const notificarAvatarEscolhido = (swiper) => {
        const slideEl = swiper.slides[swiper.activeIndex];
        const btn = slideEl.querySelector('[id]');
        const id = btn?.id;
        setAtivo(id);
    }

    const listaComponentesAvatar = [
        { id: "homem1", componente: <Homem1/> },
        { id: "homem2", componente: <Homem2/> },
        { id: "homem3", componente: <Homem3/> },
        { id: "mulher1", componente: <Mulher1/> },
        { id: "mulher2", componente: <Mulher2/> },
        { id: "mulher3", componente: <Mulher3/> },
        { id: "mulher4", componente: <Mulher4/> },
        { id: "robo1", componente: <Robo1/> },
        { id: "robo2", componente: <Robo2/> },
    ];

    return (
        <SelecoesAvatarStyle>
            <Swiper
                spaceBetween={0}
                slidesPerView={1.5}
                centeredSlides={true}
                loop={true}
                onSlideChange={(swiper) => notificarAvatarEscolhido(swiper)}
            >
                {listaComponentesAvatar.map((avatar) => (
                    <SwiperSlide key={avatar.id}>
                        <BotaoAvatar
                            id={avatar.id}
                            ativado={ativo === avatar.id}>
                            {avatar.componente}
                        </BotaoAvatar>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SelecoesAvatarStyle>
    )
}

export default SelecoesAvatar;