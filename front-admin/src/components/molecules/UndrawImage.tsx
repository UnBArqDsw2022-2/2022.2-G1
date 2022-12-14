import { ReactElement } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import GenericContainer from "../atoms/GenericContainer";

interface UndrawImageInterface {
  imageElement: ReactElement | undefined;
}

const SvgContainer = styled.div`
  width: 146px;
  height: 133px;
  transition: all ease 400ms;
`

const UndrawImage = ({ imageElement }: UndrawImageInterface) => (
  <GenericContainer
    width="39%"
    height="100%"
    color={colors.white}
  >
    <SvgContainer data-testid="svg_container_test" id="svg_container">
      {imageElement}
    </SvgContainer>
  </GenericContainer>
);

export default UndrawImage;