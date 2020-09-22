import styled from "@emotion/styled";

export default styled.div<{ height?: number; width?: number }>`
    height: ${({ height }) => height || 0}px;
    width: ${({ width }) => width || 0}px;
`;