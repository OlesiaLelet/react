import './Component1.css';
import img1 from "../../icons/chat.png";
import img2 from "../../icons/share.png";
import img3 from "../../icons/heart.png";
import img4 from "../../icons/download.png";

const commAmount = 482;
const sharingsAmount = 146;
const likesAmount = 887;

const Component1 = ({name, avatar, photo, nickname, icon_verify, date, text}) => {

    return <div className='post'>
        <div className="post__user">
           <img className='post__user--avatar' src={avatar} alt="ANAKIN_IMAGE"></img>
           <span className="post__user--name">{name}</span>
           <img className="post__user--sign" src={icon_verify} alt="verified"></img>
           <span className="post__user--nickname">{nickname}</span>
           <span className="post__user--date">{date}</span>
        </div>
        <div className="post__text">{text}</div>
        <img className="post__pict" src={photo} alt="post_pict"></img>
        <div className="post__details">
            <div className="post__details--coments">
              <img className="icon" src={img1} alt='comments__icon'></img>  
              <span className='comments__amount'>{commAmount}</span>
            </div>

            <div className="post__details--sharings">
              <img className="icon" src={img2} alt='sharings__icon'></img> 
              <span className='sharings__amount'>{sharingsAmount}</span> 
            </div>

            <div className="post__details--likes">
              <img className="icon" src={img3} alt='coments__icon'></img>
              <span className='likes__amount'>{likesAmount}</span>
            </div>

            <div className="post__details--download">
              <img className="icon" src={img4} alt='coments__icon'></img>
            </div>
      </div>
    </div>
    

    
}
export default Component1;