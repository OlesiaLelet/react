import './Post.css';
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
           <img className='user__avatar' src={avatar} alt="user__avatar"/>
           <span className="user__name">{name}</span>
           <img className="user__sign" src={icon_verify} alt="verified"/>
           <span className="user__nickname">{nickname}</span>
           <span className="user__date">{date}</span>
        </div>
        <div className="post__text">{text}</div>
        <img className="post__pict" src={photo} alt="post_pict"/>
        <div className="post__details">
            <div className="post__details--coments">
              <img className="icon" src={img1} alt='comments__icon'/>  
              <span className='comments__amount'>{commAmount}</span>
            </div>

            <div className="post__details--sharings">
              <img className="icon" src={img2} alt='sharings__icon'/> 
              <span className='sharings__amount'>{sharingsAmount}</span> 
            </div>

            <div className="post__details--likes">
              <img className="icon" src={img3} alt='coments__icon'/>
              <span className='likes__amount'>{likesAmount}</span>
            </div>

            <div className="post__details--download">
              <img className="icon" src={img4} alt='coments__icon'/>
            </div>
      </div>
    </div>
    

    
}
export default Component1;