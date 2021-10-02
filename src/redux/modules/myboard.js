// widgets.js
import {db} from "../../firebase";
import {collection,doc,getDoc, getDocs,addDoc,updateDoc,deleteDoc,} from "firebase/firestore";
// Actions
const LOAD   = 'myborad/LOAD';
const CREATE = 'myborad/CREATE';
const UPDATE = 'myborad/UPDATE';
const REMOVE = 'myborad/REMOVE';

const initailState = {
    list:[
      {word :" 스타벅스" ,desc:"사이렌오더로 주문했을때 대기자 수를 알수 있었으면 좋겠다.", exam:"대기자 인원수 알림"},
      {word :" KFC" ,desc:"불고기버거 소스가 너무 적어요", exam:"소스를 추가한다."},
      {word :" nh카드" ,desc:"앱이너무 느려요", exam:"앱을 삭제하고 거래를 종료한다."}
    ],
};

// Action Creators
export function loadCard(card_data){
    return {type: LOAD, card_data};
  };
  
export function addCard(card_data){
    return {type: CREATE, card_data};
  };
  
export const removeCard = (card_index) => {
    return {type: REMOVE, card_index}
}
  
//  export const updateCard = (Card_index, _Card_data) => {
//     return {type: UPDATE, card_index, _card_data}



// middlewares
export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "card"));

    let card_list = [];
    card_data.forEach((doc) =>{
      card_list.push({id:doc.id, ...doc.data()});
    } );

    dispatch(loadCard(card_list));

 }
}

export const addCardFB = (input_text) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "card"), input_text);
    const _card_data = await getDoc(docRef);
    const card_data ={id: _card_data.id, ..._card_data.data()};
    console.log(card_data);

    dispatch(addCard(card_data));
   

  }
}

export const updateCardFB = (card_id,card_list) => {
  return async function (dispatch) {
    const docRef = doc(db, "card", card_id)
    console.log(docRef);
    await updateDoc(docRef,card_list);
    dispatch(loadCardFB(card_list));

  }
}

export const removeCardFB = (card_id) => {
  return async function (dispatch, getState) {
    if(!card_id) {
      window.alert("아이디가 없습니다.")
      return;
    }
    const docRef = doc(db,"card", card_id);
    await deleteDoc(docRef);
    console.log(docRef.id);
    console.log(getState());

    const _card_list = getState().myboard.list;
    console.log(_card_list);
    const card_index = _card_list.findIndex((b) => {
      return b.id === card_id;
    })
    console.log(card_index);
    dispatch(loadCardFB());
  }
}
// }



// Reducer
export default function reducer(state = initailState, action = {}) {
  switch (action.type) {
    case "myborad/LOAD": {
      console.log(action);
      return {list: action.card_data};
    }

    case "myborad/CREATE": { 
        const new_card_list = [...state.list, action.card_data];
        return {list: new_card_list}
      }

    case "mybord/REMOVE" : {
      console.log(action);
      const new_card_list = state.list.filter((l, idx) => {
        return parseInt(action.card_index) != idx;

    });
    return {...state, list : new_card_list};
    }
    // do reducer stuff
    default: return state;
  }
}