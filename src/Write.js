import React from "react";
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {addCardFB} from "./redux/modules/myboard";

const Write = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const input_word = React.useRef(null);
    const input_desc = React.useRef(null);
    const input_exam = React.useRef(null);

    return (
      
        <Back>
          <Container>
            <Head>
              <Title>😕불편추가하기</Title>
            </Head>
       <Wrap>
          <Card>
            <CardItem>
              <ContentTitle>키워드</ContentTitle>
              <ContentIunput name="keyword" placeholder="키워드를 입력해주세요!" ref={input_word} />
            </CardItem>
            <CardItem>
              <ContentTitle>설명</ContentTitle>
              <ContentIunput name="desc" placeholder="어떤 불만이었나요?" ref={input_desc}/>
            </CardItem>
            <CardItem>
              <ContentTitle>예시</ContentTitle>
              <ContentIunput name="example" placeholder="어떻게 해결할수 있을까요?"ref={input_exam}/>
            </CardItem>
            <AddBtn variant="contained" onClick={() => {
                let input_text = {
                    word: input_word.current.value,
                    desc: input_desc.current.value,
                    exam: input_exam.current.value,
                }
                dispatch(addCardFB(input_text));
                window.setTimeout(()=>{
                  history.push("/");
                },500);
               }}>추가하기</AddBtn>
          </Card>
        </Wrap>
        </Container>
     </Back>
   );
}

const Back = styled.div`
 background-color : #dddaed;
 width : 100vw;
 height : 100vh;
 display : flex;
`;

const Container = styled.div`
background-color : #ebe8fe;
 width : 90%;
 max-width : 400px;
 height : 83%;
 margin: auto;
 border-radius : 10px;
 box-shadow: 0px 0px 10px 2px gray;
 `;

 const Head = styled.div`
display : table;
width: 100%;
height : 10%;
font-size: 0.5em;

`;
const Title = styled.h1`
display: table-cell;
text-align:left;
vertical-align:middle;
padding-left : 20px;
border-radius : 10px 10px 0px 0px;
position : relative;
background-color : #ebe8fe;
font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
`;

const Wrap = styled.div`
background-color : #fff;
border-radius : 30px 30px 10px 10px;
height: 90%;
overflow-x:hidden;
overflow-y: auto;
`;


const Card = styled.div`
background-color : #fff;
color : #252A34;
margin-top: auto;
padding: 20px;
& small{
  text-decoration: underline;
}& p {
  margin :10px;
}

`;

const CardItem = styled.div`
background-color: #fff;
padding: 10px;
margin: 5px;
border-radius : 10px 10px 10px 0px;
word-break:break-all;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 100;
`;

const ContentTitle = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
margin : 10px 0px;
font-size: 14px; position: relative; display: inline-block;
position: relative; display: inline-block; background: linear-gradient(to top, #d5b1f1 5%, transparent 50%)

`;

const ContentIunput = styled.textarea`
height: 40px;
  margin: 10px 0px;
  width: 100%;
  border-top : none;
  border-left : none;
  border-right : none;
  border-bottom : 3px solid #ddd;
  font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 100;
&:focus {
  padding : 2px;
  outline:3px solid #720fff;
}
`;

const AddBtn = styled.button`
width:100%;
padding: 10px;
color: #fff;
margin-top: 30px;
border-radius : 20px;
background: rgb(96,9,240);
background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
border: none;
&:hover {
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
  -4px -4px 6px 0 rgba(116, 125, 136, .5), 
inset -4px -4px 6px 0 rgba(255,255,255,.2),
inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
};
&::before {
  height: 0%;
  width: 2px;
}
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: bold;
`;


export default Write;