import styled from "styled-components";

function BtnPrimary(props) {

    const { text, onClick } = props;

    const StyledButton = styled.button`
        background-color: var(--wed-black);
        color: var(--wed-white);
        cursor: pointer;

        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 2rem;
        padding-right: 2rem;

        border-radius: 0.5rem;
        width: 66%;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);

        &:hover {
            font-weight: var(--font-bold);
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
        }
    `;

    return (
        <StyledButton onClick={onClick} className="text-sm">
            {text}
        </StyledButton>
    );
}

export default BtnPrimary;