import {SelecoesAvatarStyle} from "./Style";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import {Homem1} from "../../svgs/avatars/Homem1";
import {Robo1} from "../../svgs/avatars/Robo1";
import {Mulher1} from "../../svgs/avatars/Mulher1";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useState} from "react";

const SelecoesAvatar = () => {
    const [ativo, setAtivo] = useState(null);

    const notificarAvatarEscolhido = (swiper) => {
        const slideEl = swiper.slides[swiper.activeIndex];
        const btn = slideEl.querySelector('[id]');
        const id = btn?.id;
        console.log(id);
        setAtivo(id);
    }

    return (
        <SelecoesAvatarStyle>
            <Swiper
                spaceBetween={0}
                slidesPerView={1.5}
                centeredSlides={true}
                loop={true}
                onSlideChange={(swiper) => notificarAvatarEscolhido(swiper)}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <BotaoAvatar id={"homem1"} ativado={ativo === "homem1"}>
                        <Homem1/>
                    </BotaoAvatar>
                </SwiperSlide>
                <SwiperSlide>
                    <BotaoAvatar
                        id={"robo1"}
                        ativado={ativo === "robo1"}>
                        <Robo1/>
                    </BotaoAvatar>
                </SwiperSlide>
                <SwiperSlide>
                    <BotaoAvatar id={"mulher1"} ativado={ativo === "mulher1"}>
                        <Mulher1/>
                    </BotaoAvatar>
                </SwiperSlide>
            </Swiper>
        </SelecoesAvatarStyle>
    )
}

export default SelecoesAvatar;