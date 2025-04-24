import {CardCronogramaStyle} from "./Style";
import {SetaLevarPaginaInteracao} from "../../svgs/SetaLevarPaginaInteracao";
import {useEffect, useState} from "react";

const CardCronograma = ({
                            urlFotoConvidado = "imagens/fotoDefaultCronogramaPalestrante.png",
                            nomeConvidado,
                            horarioInicio,
                            horarioFim,
                            onClick,
                        }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const getFormattedTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const compararHorarios = (horarioInicio, horarioFim) => {
        const [horaInicio, minutoInicio] = horarioInicio.split(':').map(Number);
        const [horaFim, minutoFim] = horarioFim.split(':').map(Number);
        const [horaAtual, minutoAtual] = getFormattedTime().split(':').map(Number);

        const inicio = new Date();
        inicio.setHours(horaInicio, minutoInicio);

        const fim = new Date();
        fim.setHours(horaFim, minutoFim);

        const atual = new Date();
        atual.setHours(horaAtual, minutoAtual);

        console.log("Horário", nomeConvidado, "atual:", atual);
        console.log("Horário", nomeConvidado, "início:", inicio);
        console.log("Horário", nomeConvidado, "fim:", fim);

        //     verifica se o horario é anterior ao atual
        if (atual < inicio) {
            console.log("Horário", nomeConvidado, "anterior");
            return 'anterior';
        } else if (atual > fim) {
            console.log("Horário", nomeConvidado, "posterior");
            return 'posterior';
        } else {
            console.log("Horário", nomeConvidado, "dentro");
            return 'dentro';
        }
    }

    const className = compararHorarios(horarioInicio, horarioFim);

    return (
        <CardCronogramaStyle className={className}>
            <img
                src={urlFotoConvidado}
                alt="Foto do convidado"
                className="fotoConvidado"
            />

            <div className={'informacoesPalestrante'}>
                <div className={'nomePalestrante'}>
                    {nomeConvidado}
                </div>
                <div className={'horarioPalestrante'}>
                    {horarioInicio} - {horarioFim}
                </div>
            </div>

            <div className={'setaEnviarParaPaginaPalestrante'}>
                {compararHorarios(horarioInicio, horarioFim) === 'anterior' && (
                    <div className={'toolTip'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <g clip-path="url(#clip0_45_430)">
                                <path
                                    d="M18.0121 13.0106L20.3395 10.8283C21.7196 9.53433 22.5025 7.72745 22.5025 5.83576V2.68822C22.503 1.94917 22.2001 1.27083 21.7149 0.78761C21.2316 0.302368 20.5534 -0.000491588 19.8143 5.98995e-07H8.18572C7.44668 -0.000491588 6.7679 0.302368 6.28462 0.787555C5.79949 1.27083 5.49658 1.94912 5.49756 2.68816V5.83565C5.49756 7.72734 6.28041 9.53428 7.66056 10.8282L9.98751 13.0096C10.1156 13.1301 10.1887 13.2978 10.1887 13.474V14.5258C10.1887 14.702 10.1156 14.8692 9.98801 14.9894L7.66062 17.1717C6.28047 18.4651 5.49762 20.2725 5.49762 22.1642V25.3117C5.49663 26.0508 5.7996 26.7291 6.28468 27.2123C6.76801 27.6975 7.44673 28.0004 8.18578 27.9999H19.8143C20.5534 28.0004 21.2317 27.6975 21.715 27.2123C22.2001 26.729 22.503 26.0508 22.5026 25.3117V22.1643C22.5026 20.2726 21.7197 18.4652 20.3396 17.1718L18.0126 14.9899C17.884 14.8693 17.8115 14.7021 17.8115 14.5259V13.4741C17.8114 13.2979 17.884 13.1303 18.0121 13.0106ZM20.4502 25.3118C20.4497 25.4908 20.3805 25.643 20.2637 25.7612C20.1454 25.878 19.9933 25.9472 19.8143 25.9477H8.18572C8.00673 25.9472 7.8541 25.878 7.73587 25.7612C7.61905 25.643 7.55031 25.4908 7.54982 25.3118V22.1643C7.54982 20.8402 8.09812 19.5745 9.06417 18.6692L11.3911 16.4869C11.9333 15.9791 12.2409 15.2688 12.2409 14.5259V13.4741C12.2409 12.7308 11.9333 12.0205 11.3907 11.5126L9.06417 9.33084C8.09806 8.42554 7.54982 7.16029 7.54982 5.83576V2.68822C7.55031 2.50923 7.61905 2.35709 7.73587 2.23836C7.8541 2.12204 8.00673 2.05275 8.18572 2.05231H19.8143C19.9932 2.05275 20.1454 2.12198 20.2637 2.23836C20.3805 2.35709 20.4497 2.50917 20.4502 2.68822V5.8357C20.4502 7.16023 19.9019 8.42548 18.9358 9.33078L16.6089 11.5126C16.0667 12.0204 15.7591 12.7307 15.7591 13.474V14.5259C15.7591 15.2688 16.0667 15.979 16.6094 16.4877L18.9358 18.6687C19.9019 19.5745 20.4502 20.8401 20.4502 22.1642V25.3118Z"
                                    fill="white"/>
                                <path
                                    d="M12.9752 20.7238L8.74622 24.9528H19.2532L15.0242 20.7238C14.4585 20.1586 13.5414 20.1586 12.9752 20.7238Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_45_430">
                                    <rect width="28" height="28" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                )}
                {compararHorarios(horarioInicio, horarioFim) === 'posterior' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M36.6667 20C36.6667 29.2047 29.2047 36.6667 20 36.6667C10.7953 36.6667 3.33337 29.2047 3.33337 20C3.33337 10.7952 10.7953 3.33333 20 3.33333C29.2047 3.33333 36.6667 10.7952 36.6667 20ZM26.7172 14.9494C27.2054 15.4376 27.2054 16.2291 26.7172 16.7172L18.3839 25.0505C17.8957 25.5387 17.1044 25.5387 16.6162 25.0505L13.2828 21.7172C12.7947 21.229 12.7947 20.4377 13.2828 19.9495C13.771 19.4613 14.5624 19.4613 15.0506 19.9495L17.5 22.3988L21.2247 18.6742L24.9495 14.9494C25.4377 14.4613 26.229 14.4613 26.7172 14.9494Z"
                              fill="white"/>
                    </svg>
                )}
                {compararHorarios(horarioInicio, horarioFim) === 'dentro' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" onClick={onClick}>
                        <path
                            d="M1.66663 25V15C1.66663 9.47715 6.14378 5 11.6666 5H28.3333C33.8561 5 38.3333 9.47715 38.3333 15V25C38.3333 30.5228 33.8561 35 28.3333 35H11.6666C6.14378 35 1.66663 30.5228 1.66663 25Z"
                            stroke="#CD0909" stroke-width="1.5"/>
                        <path
                            d="M15 15C17.7615 15 20 17.2385 20 20C20 22.7615 17.7615 25 15 25C12.2386 25 10 22.7615 10 20C10 17.2385 12.2386 15 15 15Z"
                            stroke="#CD0909" stroke-width="1.5"/>
                        <path d="M23.3333 25V15L29.9999 25V15" stroke="#CD0909" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                )}
                {/*<SetaLevarPaginaInteracao onClick={onClick}/>*/}
            </div>
        </CardCronogramaStyle>
    )
};

export default CardCronograma;