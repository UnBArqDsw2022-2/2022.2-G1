import styled, { css } from 'styled-components';
import React,{ ReactNode } from 'react';
import {colors} from '../../styles/colors';


interface CardContainerInterface {
    width?: string;
    height?: string;
    borderRadius?: string;
    hover?:boolean;
    borderColor?: string;
    containerType?: string;
    backgroundImage?: string;
    children:ReactNode;
    onMouseEnter?: VoidFunction;
    onMouseLeave?: VoidFunction;
}

interface GenericCardContainerInterface extends Omit<CardContainerInterface, "children"> {
    typeDefinition: string
}

const GenericCardContainer = styled.div<GenericCardContainerInterface>`
    display: flex;
    flex-direction:column;
    padding: 0px;
    border-radius: ${({ borderRadius }) => borderRadius || '16px'};
    outline: none;
    border: none;
    ${({ height,width,borderColor,backgroundImage, typeDefinition }) => {
        switch (typeDefinition){
            case 'background':
                    return css`
                        height: ${height};
                        width: ${width};
                        background-color:  ${borderColor};
                        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
                    `
            case 'image':
                    return css`
                        margin:0px;
                        height: calc(${height} - 5.2px);
                        width: ${width};
                        background-image: url(${backgroundImage});
                        background-size: cover;
                    `
            case 'main':
                return css`
                    height: calc(${height} - 17.2px);
                    width: calc(${width} - 24px);
                    padding:12px;
                    padding-bottom:0px;
                `
            case 'hover':
                return css`
                    height: calc(${height} - 17.2px);
                    width: calc(${width} - 24px);
                    background: ${colors.black}E6;
                    padding:12px;
                    padding-bottom:0px;
                `
        }
    }};
`

const CardContainer = ({
    width,
    height,
    borderRadius,
    borderColor,
    backgroundImage,
    hover,
    children,
    onMouseEnter,
    onMouseLeave,
}: CardContainerInterface) => {
    return (
        <GenericCardContainer
            data-testid='card container'
            typeDefinition={'background'}
            width={width}
            height={height}
            borderRadius={borderRadius}
            borderColor={borderColor}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >

            <GenericCardContainer
                typeDefinition={'image'}
                width={width}
                height={height}
                borderRadius={borderRadius}
                backgroundImage={backgroundImage}
            >
                <GenericCardContainer
                    typeDefinition={hover ? 'hover' : 'main'}
                    width={width}
                    height={height}
                    borderRadius={borderRadius}
                    backgroundImage={backgroundImage}
                >
                    {children}
                </GenericCardContainer>
            </GenericCardContainer>
        </GenericCardContainer>
    )
}

export default CardContainer;
