import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import {loadCardFB, removeCardFB} from './redux/modules/myboard'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import EditIcon from '@mui/icons-material/Edit';

const Board = (props) => {


  const dispatch = useDispatch();
  const history = useHistory();
  const card_list = useSelector((state) => state.myboard.list);

  React.useEffect(()=> {
    dispatch(loadCardFB());
  }, [])

   return (
     <Back>
       <Container>
         <Head>
         <Title>📚나의 불편노트</Title>
         </Head>
        <Wrap id="scroll">
        {card_list.map((l, idx)=>{
          return (
            <Card>
              <CardItem>
              <div key={idx}>
                <div>
                  <Delbox>
                  <small>키워드</small>
                  <div>
                  <EditIcon onClick = {() => {
                    history.push("/edit/"+idx)}}style={{fontSize:25, color:"#a26fea"}}>

                    </EditIcon>
                  <DeleteIcon onClick = {() => {
                    console.log(card_list[idx].id);
                    dispatch(removeCardFB(card_list[idx].id));
                  }}style={{fontSize:25, color:"#a26fea"}}>삭제</DeleteIcon>
                  </div>
                  </Delbox>
                  <p>{l.word}</p>
                </div>
                <div>
                  <small>설명</small>
                  <p>{l.desc}</p>
                </div>
                <div>
                  <small>예시</small>
                  <Ex>{l.exam}</Ex>
                </div>
              </div>
              </CardItem>
            </Card>
          )
        })}
        </Wrap>
        <Buttons>
          <ArrowCircleUpIcon onClick={() => {document.getElementById('scroll').scrollTo(0,0);}}style={{fontSize:40, color:"#720fff"}}>위로가기</ArrowCircleUpIcon>
          <AddCircleIcon onClick={() => {history.push("/write");}}style={{fontSize:40, color:"#720fff"}}>추가하기</AddCircleIcon>    
          </Buttons>    
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

`;
const Title = styled.p`
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
border-radius : 30px 30px 0px 0px;
max-height: 70vh;
overflow-x:hidden;
overflow-y: auto;
`;

const Delbox = styled.div`
 width: 100%;
  height: 18px;
  display: flex;
  justify-content: space-between;
`;

const CardItem = styled.div`
background-color: #faf9fc;
padding: 20px;
margin: 5px;
border-radius : 30px 30px 30px 3px;
word-break:break-all;
border: 1px solid #eee;
opacity: 0.8;
&:hover {
    opacity: 1.0;
    border: 1px solid #720fff;
    box-shadow: 0px 0px 20px 1px #ddd;
    transition : 0.5s
}
`;

const Card = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 700;
background-color : #fff;
color : #252A34;
justify-content: center;
margin: 0px 20px;
padding: 10px;
& small{
  font-size: 14px; position: relative; display: inline-block;
  position: relative; display: inline-block; background: linear-gradient(to top, #d5b1f1 5%, transparent 50%)
}& p {
  margin :5px;
  font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 300;
}
`;

const Ex = styled.p`
 color : #720fff;
 font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
`;

const Buttons = styled.div`
background-color : #fff;
border-radius : 0px 0px 10px 10px;
height: 40px;
display:flex;
justify-content: space-between;
`;


export default Board;