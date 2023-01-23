import { NextPage } from "next";
import styled,{css} from "styled-components";


const Text = styled.span`
    color: ${(props)=> props.theme.colors.red};
    font-size: ${(props)=> props.theme.fontSizes[3]};
    margin: ${(props)=> props.theme.space[2]};
`

const StyledTheme:NextPage = () => {
    return (
        <div>
            <Text>Theme used</Text>
        </div>
    )
}

export default StyledTheme