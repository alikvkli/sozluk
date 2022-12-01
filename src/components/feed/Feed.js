import {Box, Stack} from "@mui/material";
import Entry from "../entry/Entry";
import * as Styled from "./Feed.styles";

export default function Feed() {
    return (
        <Styled.FeedStack>
            <Styled.FeedBox>
                <Stack>
                    <Entry text="ikinci annem olarak gördüğüm nurgül ablamın her karşılaştığımda sorduğu soru. nurgül
                abla, 32 yaşındayım, konuşmak kesmiyor artık."/>
                    <Entry text="ikinci annem olarak gördüğüm"/>
                    <Entry text="ikinci annem olarak gördüğüm nurgül ablamın her karşılaştığımda sorduğu soru. nurgül
                abla, 32 yaşındayım, konuşmak kesmiyor artık."/>
                    <Entry text="ikinci annem olarak gördüğüm nurgül ablamın her karşılaştığımda sorduğu soru. nurgül
                abla, 32 yaşındayım, konuşmak kesmiyor artık."/>
                    <Entry text="ikinci annem olarak gördüğüm nurgül ablamın her karşılaştığımda sorduğu soru. nurgül
                abla, 32 yaşındayım, konuşmak kesmiyor artık."/>
                    <Entry text="ikinci annem olarak gördüğüm nurgül ablamın her karşılaştığımda sorduğu soru. nurgül
                abla, 32 yaşındayım, konuşmak kesmiyor artık."/>
                </Stack>
            </Styled.FeedBox>
        </Styled.FeedStack>

    )
}
