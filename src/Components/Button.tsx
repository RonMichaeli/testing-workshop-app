import React, { FC } from "react";
import { Fab } from "@material-ui/core";
import styled from "@emotion/styled";

const StyledButtonContent = styled.p`
    font-weight: bold;
`;

type ButtonProps = {
    className?: string;
    content: string;
    onClick: () => void;
};

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    const { className, content, onClick } = props;

    return (
        <Fab className={className} onClick={onClick}>
            <StyledButtonContent>
                {content}
            </StyledButtonContent>
        </Fab>
    );
};

export default Button;