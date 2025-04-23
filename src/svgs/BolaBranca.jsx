import styled from "styled-components";

const XStyle = styled.div`
`

export const X = ({className}) => (
    <XStyle className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width="604" height="622" viewBox="0 0 604 622" fill="none">
            <g filter="url(#filter0_d_27_3)">
                <path
                    d="M212.489 46L299.352 200.08H303.489L391.386 46H551.67L393.455 310.727L557.875 575.455H393.455L303.489 418.273H299.352L209.386 575.455H46L208.352 310.727L51.1705 46H212.489Z"
                    fill="#CD0909"/>
            </g>
            <defs>
                <filter id="filter0_d_27_3" x="0" y="0" width="603.875" height="621.455" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="23"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.802885 0 0 0 0 0.0347402 0 0 0 0 0.0347402 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_3"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_3" result="shape"/>
                </filter>
            </defs>
        </svg>
    </XStyle>
)